import React, { useState, useEffect } from "react";
import portfolioItems from "../data/portfolioData";
import "./Portfolio.css";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    const [filter, setFilter] = useState("All");
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [zoomedImage, setZoomedImage] = useState(null);

    const [loadingStates, setLoadingStates] = useState(() => {
        return portfolioItems.reduce((acc, item) => {
            if (item.image && (!item.images || item.images.length <= 1)) {
                acc[`item-${item.id}`] = true;
            } else {
                acc[`item-${item.id}`] = false;
            }
            return acc;
        }, {});
    });

    const categories = [
        "All",
        ...new Set(portfolioItems.map(item => item.category))
    ];

    const filteredItems =
        filter === "All"
            ? portfolioItems
            : portfolioItems.filter(item => item.category === filter);

    useEffect(() => {
        const intervalIds = {};

        filteredItems.forEach(item => {
            if (item.images && item.images.length > 1) {
                intervalIds[`item-${item.id}`] = setInterval(() => {
                    setCurrentImageIndex(prevIndexes => {
                        const nextIndex =
                            (prevIndexes[`item-${item.id}`] || 0) + 1 >=
                            item.images.length
                                ? 0
                                : (prevIndexes[`item-${item.id}`] || 0) + 1;
                        return {
                            ...prevIndexes,
                            [`item-${item.id}`]: nextIndex
                        };
                    });
                }, 10000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach(clearInterval);
        };
    }, [filteredItems]);

    const getCurrentImage = item => {
        if (item.images && item.images.length > 0) {
            return item.images[currentImageIndex[`item-${item.id}`] || 0];
        }
        return item.image;
    };

    const handleImageLoad = itemId => {
        const item = portfolioItems.find(i => i.id === itemId);
        if (item && item.image && (!item.images || item.images.length <= 1)) {
            setLoadingStates(prevStates => ({
                ...prevStates,
                [`item-${itemId}`]: false
            }));
        }
    };

    const handleImageError = itemId => {
        const item = portfolioItems.find(i => i.id === itemId);
        if (item && item.image && (!item.images || item.images.length <= 1)) {
            setLoadingStates(prevStates => ({
                ...prevStates,
                [`item-${itemId}`]: "error"
            }));
        }
        console.error(`Error loading image for item ${itemId}`);
    };

    return (
        <section className="portfolio-section">
            <h2>Our Latest Work</h2>
            <div className="filter-buttons">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={filter === cat ? "active" : ""}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="portfolio-grid">
                {filteredItems.map(item => {
                    const isSingleImageItem =
                        item.image && (!item.images || item.images.length <= 1);

                    return (
                        <div key={item.id} className="portfolio-item">
                            <div
                                className="portfolio-image-container"
                                onClick={() => {
                                    if (
                                        isSingleImageItem &&
                                        loadingStates[`item-${item.id}`]
                                    )
                                        return;
                                    setZoomedImage(getCurrentImage(item));
                                }}
                            >
                                {isSingleImageItem &&
                                    loadingStates[`item-${item.id}`] ===
                                        true && (
                                        <div className="loading-spinner">
                                            <FontAwesomeIcon
                                                icon={faSpinner}
                                                spin
                                                size="3x"
                                            />
                                        </div>
                                    )}
                                {isSingleImageItem &&
                                    loadingStates[`item-${item.id}`] ===
                                        "error" && (
                                        <div className="loading-error">
                                            <span>Image failed to load.</span>
                                        </div>
                                    )}
                                <img
                                    src={getCurrentImage(item)}
                                    alt={item.title}
                                    style={{
                                        display:
                                            isSingleImageItem &&
                                            loadingStates[`item-${item.id}`]
                                                ? "none"
                                                : "block"
                                    }}
                                    onLoad={() => handleImageLoad(item.id)}
                                    onError={() => handleImageError(item.id)}
                                />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>

            {zoomedImage && (
                <div className="modal" onClick={() => setZoomedImage(null)}>
                    <img
                        src={zoomedImage}
                        alt="Zoomed"
                        className="modal-image"
                    />
                </div>
            )}
        </section>
    );
};

export default Portfolio;
