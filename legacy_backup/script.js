document.addEventListener('DOMContentLoaded', () => {
    console.log('Use AI with Tech Dad site loaded successfully!');

    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Dynamic Video Fetching ---
    const videoContainer = document.getElementById('video-container');
    const channelId = 'UCprJrpCURmTBRxBoCFpsMLA';
    // Using rss2json service to convert YouTube RSS feed to JSON
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    if (videoContainer) {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    // Clear loading state
                    videoContainer.innerHTML = '';

                    // Take the latest 3 videos
                    const latestVideos = data.items.slice(0, 3);

                    latestVideos.forEach(video => {
                        // Extract high-quality thumbnail if available, or use the standard one
                        // RSS2JSON returns a 'thumbnail' field, but YouTube RSS thumbnails are sometimes low res.
                        // We can construct the high res URL from the video ID.
                        // The localized video ID is in the guid: e.g., "yt:video:VIDEO_ID"
                        const videoId = video.guid.split(':')[2];
                        const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                        // Fallback to the one from RSS if we wanted, but maxresdefault is usually best for this layout.

                        const videoCard = document.createElement('article');
                        videoCard.className = 'video-card';

                        // Parse date for display (optional, but nice)
                        const pubDate = new Date(video.pubDate).toLocaleDateString();

                        videoCard.innerHTML = `
                            <img src="${thumbnail}" alt="${video.title}" class="video-thumbnail" onerror="this.src='${video.thumbnail}'">
                            <div class="video-info">
                                <h3>${video.title}</h3>
                                <p class="video-date" style="font-size: 0.85rem; color: var(--accent-secondary); margin-bottom: 0.5rem;">${pubDate}</p>
                                <p>${truncateText(video.description, 100)}</p>
                                <a href="${video.link}" target="_blank" class="text-link">Watch Video &rarr;</a>
                            </div>
                        `;

                        videoContainer.appendChild(videoCard);
                    });
                } else {
                    handleFetchError(videoContainer);
                }
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
                handleFetchError(videoContainer);
            });
    }

    function handleFetchError(container) {
        container.innerHTML = `
            <div class="loading-state">
                <p>Unable to load latest videos at this time.</p>
                <a href="https://www.youtube.com/@UseAIwithTechDad" target="_blank" class="text-link">Visit Channel &rarr;</a>
            </div>
        `;
    }

    function truncateText(text, maxLength) {
        // Remove HTML tags from description if any (RSS2JSON usually cleans it but good to be safe)
        const element = document.createElement('div');
        element.innerHTML = text;
        const cleanText = element.textContent || element.innerText || '';

        if (cleanText.length <= maxLength) return cleanText;
        return cleanText.substr(0, maxLength) + '...';
    }

    // --- Dynamic Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

