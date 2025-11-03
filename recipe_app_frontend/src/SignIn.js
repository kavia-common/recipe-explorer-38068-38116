import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * SignIn
 * A React component that renders the generated Sign In screen pixel-accurately by:
 * - Injecting the original markup structure (without altering class names or layout)
 * - Loading global common.css and screen-specific CSS
 * - Executing the generated JavaScript for interactive behavior
 * 
 * Notes:
 * - Assets are referenced from /assets to ensure CRA dev server and production builds can serve them.
 * - We avoid transforming the HTML; we mirror the DOM per the provided HTML file.
 */
function SignIn() {
  // Load styles and scripts on mount and clean up on unmount
  useEffect(() => {
    // Inject CSS files (common + screen specific)
    const commonCss = document.createElement('link');
    commonCss.rel = 'stylesheet';
    commonCss.href = '/assets/common.css';

    const screenCss = document.createElement('link');
    screenCss.rel = 'stylesheet';
    screenCss.href = '/assets/sign-in-11-235.css';

    document.head.appendChild(commonCss);
    document.head.appendChild(screenCss);

    // Inject JS files (app.js + screen specific)
    const appScript = document.createElement('script');
    appScript.src = '/assets/app.js';
    appScript.async = true;

    const screenScript = document.createElement('script');
    screenScript.src = '/assets/sign-in-11-235.js';
    screenScript.async = true;

    document.body.appendChild(appScript);
    document.body.appendChild(screenScript);

    return () => {
      // Cleanup injected assets on unmount
      try {
        document.head.removeChild(commonCss);
      } catch {}
      try {
        document.head.removeChild(screenCss);
      } catch {}
      try {
        document.body.removeChild(appScript);
      } catch {}
      try {
        document.body.removeChild(screenScript);
      } catch {}
    };
  }, []);

  // The container that mirrors the structure from assets/sign-in-11-235.html body .screen container.
  // IMPORTANT: We keep class names and structure intact; only adjust asset paths to start from /assets/.
  return (
    <div className="screen sign-in-11-235" role="main" aria-label="Sign In screen">
      {/* Status Bar (component) */}
      <div className="component status-bar" aria-hidden="true">
        {/* Symbols (battery/wifi/signal) */}
        <div className="status-symbols">
          {/* Battery group */}
          <div className="battery">
            {/* battery body/outline paths as rectangles/icons */}
            <img alt="Battery fill" className="icon battery-fill" src="/assets/figmaimages/figma_image_13_71_128_306.svg" />
            <img alt="Battery outline" className="icon battery-outline" src="/assets/figmaimages/figma_image_13_71_128_307.svg" />
            <div className="battery-cap"></div>
            <img alt="" className="battery-inner" src="/assets/figmaimages/figma_image_13_71_128_309.svg" />
          </div>
          {/* Signal group (rectangles) */}
          <div className="signal">
            <img alt="" className="bar bar1" src="/assets/figmaimages/figma_image_13_71_128_311.svg" />
            <img alt="" className="bar bar2" src="/assets/figmaimages/figma_image_13_71_128_312.svg" />
            <img alt="" className="bar bar3" src="/assets/figmaimages/figma_image_13_71_128_313.svg" />
            <img alt="" className="bar bar4" src="/assets/figmaimages/figma_image_13_71_128_314.svg" />
          </div>
          {/* Wi-Fi (boolean operation paths as shapes) */}
          <div className="wifi">
            <div className="wifi-arc arc1"></div>
            <div className="wifi-arc arc2"></div>
            <div className="wifi-arc arc3"></div>
          </div>
        </div>
        <div className="status-time" aria-label="Time">19:27</div>
      </div>

      {/* Title group */}
      <div className="group title">
        <div className="text hello">Hello,</div>
        <div className="text welcome">Welcome Back!</div>
      </div>

      {/* Input field: Email */}
      <div className="component input-field email">
        <div className="rect"></div>
        <div className="label">Email</div>
        <div className="placeholder">Enter Email</div>
      </div>

      {/* Input field: Password */}
      <div className="component input-field password">
        <div className="rect"></div>
        <div className="label">Enter Password</div>
        <div className="placeholder">Enter Password</div>
      </div>

      {/* Or Sign in With line + text */}
      <div className="group line-with-text">
        <div className="line left"></div>
        <div className="text or">Or Sign in With</div>
        <div className="line right"></div>
      </div>

      {/* Social buttons */}
      <div className="button social google" role="button" aria-label="Sign in with Google">
        <div className="bg-card"></div>
        <img alt="Google icon shape1" className="icon g1" src="/assets/figmaimages/figma_image_13_39.svg" />
        <div className="icon g2"></div>
        <div className="icon g3"></div>
        <img alt="Google icon shape4" className="icon g4" src="/assets/figmaimages/figma_image_13_42.svg" />
      </div>

      <div className="button social facebook" role="button" aria-label="Sign in with Facebook">
        <div className="bg-card"></div>
        <div className="fb group">
          <div className="fb-bg"></div>
          <img alt="Facebook glyph" className="fb-glyph" src="/assets/figmaimages/figma_image_13_61.svg" />
          <div className="fb-overlay"></div>
        </div>
      </div>

      {/* CTA Big Button */}
      <button className="button big cta" type="button" aria-label="Sign In">
        <span className="label">Sign In</span>
        <span className="icon arrow" aria-hidden="true"></span>
      </button>

      {/* Forgot Password */}
      <div className="group forgot">
        <div className="text forgot-text">Forgot Password?</div>
      </div>

      {/* Sign up link */}
      <div className="text signup">Don’t have an account? Sign up</div>

      {/* Home indicator */}
      <div className="component home-indicator" aria-hidden="true">
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default SignIn;
