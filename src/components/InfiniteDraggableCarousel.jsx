/** @jsxImportSource @emotion/react */
import { motion, animate, useMotionValue } from 'framer-motion';
import styled from '@emotion/styled';
import { useRef, useEffect, useState } from 'react';

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  user-select: none;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  will-change: transform;
  cursor: grab;
`;

const CarouselItem = styled(motion.div)`
  flex-shrink: 0;
  min-width: 200px;
  margin-right: 1rem;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  &:hover {
    background: #eee;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: ${props => props.active ? '#333' : '#ccc'};
  border-radius: 50%;
  transition: background 0.3s;
`;

export default function InfiniteDraggableCarousel({ items, itemWidth = 200, gap = 16 }) {
    const trackRef = useRef(null);
    const wrapperRef = useRef(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const x = useMotionValue(0);
    const totalItemWidth = itemWidth + gap;
    const totalItems = items.length;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (trackRef.current) {
            const totalWidth = trackRef.current.scrollWidth / 2;
            setTrackWidth(totalWidth);
        }
    }, [items]);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            const delta = e.deltaY;
            const currentX = x.get();
            const newX = currentX - delta;

            if (newX > 0) {
                x.set(-trackWidth);
            } else if (newX < -trackWidth) {
                x.set(0);
            } else {
                x.set(newX);
            }

            updateActiveIndex();
        };

        const wrapper = wrapperRef.current;
        wrapper.addEventListener('wheel', handleWheel, { passive: false });

        return () => wrapper.removeEventListener('wheel', handleWheel);
    }, [trackWidth]);

    const handleDrag = (event, info) => {
        const currentX = x.get();
        const newX = currentX + info.delta.x;

        if (newX > 0) {
            x.set(-trackWidth);
        } else if (newX < -trackWidth) {
            x.set(0);
        } else {
            x.set(newX);
        }
    };

    const handleDragEnd = (event, info) => {
        const velocity = info.velocity.x;

        const animation = animate(x, x.get() + velocity * 0.5, {
            type: 'inertia',
            velocity: velocity,
            min: -Infinity,
            max: Infinity,
            bounceStiffness: 100,
            bounceDamping: 10,
            timeConstant: 750,
            onUpdate: (latest) => {
                if (latest > 0) {
                    x.set(-trackWidth);
                } else if (latest < -trackWidth) {
                    x.set(0);
                }
            },
            onComplete: () => {
                snapToNearestItem();
            }
        });
    };

    const snapToNearestItem = () => {
        const snapped = Math.round(x.get() / totalItemWidth) * totalItemWidth;
        animate(x, snapped, { type: 'spring', stiffness: 300, damping: 30 });
        updateActiveIndex();
    };

    const updateActiveIndex = () => {
        const index = Math.round(Math.abs(x.get()) / totalItemWidth) % totalItems;
        setActiveIndex(index);
    };

    const scrollToItem = (index) => {
        const offset = -index * totalItemWidth;
        animate(x, offset, { type: 'spring', stiffness: 300, damping: 30 });
        setActiveIndex(index);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % totalItems;
        scrollToItem(newIndex);
    };

    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + totalItems) % totalItems;
        scrollToItem(newIndex);
    };

    return (
        <>
            <CarouselWrapper ref={wrapperRef}>
                <LeftArrow onClick={handlePrev}>‹</LeftArrow>
                <RightArrow onClick={handleNext}>›</RightArrow>
                <CarouselTrack
                    ref={trackRef}
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -Infinity, right: Infinity }}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    dragElastic={0}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {[...items, ...items].map((item, index) => (
                        <CarouselItem key={index}>
                            {item}
                        </CarouselItem>
                    ))}
                </CarouselTrack>
            </CarouselWrapper>

            <PaginationWrapper>
                {items.map((_, i) => (
                    <Dot key={i} active={i === activeIndex} />
                ))}
            </PaginationWrapper>
        </>
    );
}
