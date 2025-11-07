
import React, { useRef, useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Dimensions, 
    ImageBackground // 👈 ImageBackground added
} from 'react-native';

const { width } = Dimensions.get('window');

// BannerSlider component updated to use ImageBackground
export default function BannerSlider({ banners }) {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // --- Auto-scroll logic ---
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % banners.length;
            
            // Calculate scroll position (width * 0.9 for banner width + width * 0.1 for margin)
            // The total space occupied by one banner is width * 0.9 (banner) + width * 0.1 (total margin) = width
            const scrollPosition = nextIndex * width; 
            
            scrollRef.current?.scrollTo({
                // Adjusting the x value for proper centered paging based on the total banner width (width * 0.9) and margin
                x: nextIndex * (width * 0.9 + width * 0.1), 
                animated: true,
            });
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, banners.length]);

    // --- Handle manual scroll end ---
    const handleScroll = (e) => {
        // Calculate the index based on the content offset x and the effective item width (banner width + horizontal margin)
        const itemWidthWithMargin = width; 
        const offset = e.nativeEvent.contentOffset.x;
        const index = Math.round(offset / itemWidthWithMargin);
        
        // Safety check to ensure index is within bounds
        if (index !== currentIndex && index >= 0 && index < banners.length) {
            setCurrentIndex(index);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                horizontal
                // Changed pagingEnabled to false for custom snapToInterval
                showsHorizontalScrollIndicator={false}
                snapToInterval={width} // Snap to the full width for smooth scrolling
                decelerationRate="fast"
                contentContainerStyle={styles.scrollViewContent}
                onMomentumScrollEnd={handleScroll}
            >
                {banners.map((banner, index) => (
                    <ImageBackground
                        key={banner.id}
                        source={{ uri: banner.image }} // 👈 Image URL is used here
                        style={styles.bannerContainer}
                        imageStyle={styles.imageStyle}
                    >
                        {/* --- Text Overlay with Shadow/Gradient --- */}
                        <View style={[styles.textOverlay, { backgroundColor: `${banner.color}90` }]}>
                            <Text style={styles.title}>{banner.title}</Text>
                            <Text style={styles.subtitle}>{banner.subtitle}</Text>
                        </View>
                        
                    </ImageBackground>
                ))}
            </ScrollView>
            {/* --- Pagination Dots --- */}
            <View style={styles.pagination}>
                {banners.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    scrollViewContent: {
        paddingHorizontal: width * 0.05, // Add padding equal to half the margin for centered look
    },
    bannerContainer: {
        width: width * 0.9, // Banner width (90% of screen width)
        height: 180,
        borderRadius: 15,
        marginRight: width * 0.1, // Margin between banners (10% of screen width)
        overflow: 'hidden',
        // Note: The last banner will have a marginRight, so the ScrollViewContent style is needed for paddingLeft.
    },
    imageStyle: {
        borderRadius: 15,
        resizeMode: 'cover',
    },
    textOverlay: {
        flex: 1,
        borderRadius: 15,
        padding: 20,
        justifyContent: 'flex-end', // Text at the bottom of the banner
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 15,
        color: '#fff',
        opacity: 0.9,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#666',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#F88310',
        width: 24,
    },
});