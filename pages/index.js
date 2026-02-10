export default function Home() {
return (
<div style={{
minHeight: '100vh',
backgroundColor: '#050505',
color: '#ffffff',
display: 'flex',
justifyContent: 'center',
alignItems: 'flex-start',
padding: '40px 16px',
fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
}}>
<main style={{ maxWidth: 960, width: '100%' }}>
<header style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
<div style={{
width: 96,
height: 96,
borderRadius: '999px',
background: 'linear-gradient(135deg, #ff7a00, #ff2d55, #9b00ff)',
padding: 3,
flexShrink: 0
}}>
<div style={{
width: '100%',
height: '100%',
borderRadius: '999px',
background: '#111111',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontSize: 40,
color: '#555'
}}>
Y
</div>
</div>
<div>
<h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>@your_week_in_money</h1>
<p style={{ fontSize: 14, color: '#bbbbbb' }}>Creator Media Kit · Creators Agency</p>
</div>
</header>

<section style={{ marginBottom: 40 }}>
<div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 6 }}>
Total Followers
</div>
<div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>244.0k</div>
<div style={{ fontSize: 14, color: '#9ca3af' }}>YouTube · 244.0k</div>
</section>

<section style={{ marginTop: 40 }}>
<div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 12 }}>
About Me
</div>
<div style={{ fontSize: 15, lineHeight: 1.6, color: '#e5e7eb' }}>
Welcome to my media kit! I'm your_week_in_money, and I make content on Instagram,
TikTok, YouTube, Twitter, Twitch, and Facebook. I'd love to work with you! Check
out my stats below.
</div>
</section>
</main>
</div>
);
}
