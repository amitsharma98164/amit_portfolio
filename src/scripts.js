// Load jQuery and its dependencies
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

// Load all required scripts
const loadAllScripts = async () => {
  try {
    // jQuery and its dependencies
    await loadScript('/assets/js/jquery-3.0.0.min.js');
    await loadScript('/assets/js/jquery-migrate-3.0.0.min.js');
    
    // Bootstrap
    await loadScript('/assets/js/bootstrap.bundle.min.js');
    
    // Animation and effects
    await loadScript('/assets/js/wow.min.js');
    await loadScript('/assets/js/jquery.fancybox.js');
    await loadScript('/assets/js/lity.js');
    
    // Slider
    await loadScript('/assets/js/swiper8-bundle.min.js');
    
    // Counter and waypoints
    await loadScript('/assets/js/jquery.waypoints.min.js');
    await loadScript('/assets/js/jquery.counterup.js');
    
    // Parallax
    await loadScript('/assets/js/parallaxie.js');
    
    // GSAP and its plugins
    await loadScript('/assets/js/gsap.min.js');
    await loadScript('/assets/js/ScrollSmoother.min.js');
    await loadScript('/assets/js/ScrollTrigger.min.js');
    await loadScript('/assets/js/SplitText.min.js');
    
    // Custom scripts
    await loadScript('/assets/js/common_js.js');
    await loadScript('/assets/js/home_8_scripts.js');
    
    // WhatsApp chat
    await loadScript('https://static.elfsight.com/platform/platform.js');
    
    console.log('All scripts loaded successfully');
  } catch (error) {
    console.error('Error loading scripts:', error);
  }
};

export default loadAllScripts; 