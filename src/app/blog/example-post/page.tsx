export default function ExamplePost() {
  return (
    <>
      <h1>On Building Fast Web Applications</h1>
      <h2>A practical approach to performance optimization</h2>
      
      <p className="text-center" style={{fontSize: '10pt', color: '#666', marginBottom: '2em'}}>
        Karl · January 2025
      </p>

      <h3>Abstract</h3>
      <p>
        Performance is often an afterthought in modern web development, yet it remains one of the most 
        critical factors in user experience. This article explores practical approaches to building 
        fast web applications, focusing on techniques that provide measurable impact without excessive complexity.
      </p>

      <h3>Introduction</h3>
      <p>
        The average web page has grown significantly over the past decade. While network speeds have 
        improved, user expectations have grown even faster. A slow application is no longer just 
        frustrating—it&apos;s a competitive disadvantage.
      </p>
      <p>
        Through my work on various projects, including <a href="https://strikt.tech">strikt.tech</a>, 
        I&apos;ve learned that performance optimization is not about premature optimization or micro-benchmarks. 
        It&apos;s about making informed decisions at the architectural level.
      </p>

      <h3>Core Principles</h3>
      <p>
        The foundation of fast web applications rests on three principles: minimize what you send, 
        optimize what you must send, and defer what you can.
      </p>
      <p>
        <strong>Minimize.</strong> Every byte transmitted over the network adds latency. The best 
        optimization is not sending data at all. Question every dependency, every image, every script.
      </p>
      <p>
        <strong>Optimize.</strong> What remains must be optimized ruthlessly. Compress images, 
        minify code, use modern formats. The tools exist—use them.
      </p>
      <p>
        <strong>Defer.</strong> Not everything needs to load immediately. Code splitting, lazy 
        loading, and progressive enhancement allow critical content to appear first.
      </p>

      <h3>Practical Techniques</h3>
      <p>
        In practice, I&apos;ve found several techniques consistently deliver results:
      </p>
      <ul>
        <li>Server-side rendering for initial page loads</li>
        <li>Aggressive caching strategies with proper invalidation</li>
        <li>Image optimization through modern formats (WebP, AVIF)</li>
        <li>Minimal JavaScript frameworks or vanilla JS where appropriate</li>
        <li>Critical CSS inlining for above-the-fold content</li>
      </ul>

      <h3>Measuring Success</h3>
      <p>
        Optimization without measurement is guesswork. Core Web Vitals provide a standardized 
        framework: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative 
        Layout Shift (CLS).
      </p>
      <p>
        For strikt.tech, we maintain LCP under 1.5s and FID under 100ms. These aren&apos;t arbitrary 
        targets—they&apos;re based on user research showing clear correlation with engagement.
      </p>

      <h3>Conclusion</h3>
      <p>
        Fast applications are not built by accident. They require intentional design decisions, 
        continuous measurement, and a willingness to prioritize performance alongside features.
      </p>
      <p>
        The web platform provides excellent tools for building fast experiences. The challenge 
        is discipline: resisting unnecessary abstractions, measuring real-world performance, and 
        respecting users&apos; time and bandwidth.
      </p>

      <p style={{marginTop: '2em', fontSize: '10pt', color: '#666'}}>
        <a href="/blog">← Back to blog</a>
      </p>
    </>
  );
}
