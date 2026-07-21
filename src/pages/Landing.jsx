import { useNavigate } from 'react-router-dom'
import { BookOpen, Target, ClipboardCheck, Users, ArrowRight, FlaskConical } from 'lucide-react'
import { Brand } from '../components/Brand'
import { Button } from '../components/UI'

export default function Landing(){
  const nav=useNavigate()
  return <div className="landing">
    <header className="landing-nav"><Brand/><nav><a href="#home">Home</a><a href="#features">Features</a><a href="#courses">Courses</a><a href="#about">About Us</a></nav><div className="nav-actions"><Button variant="outline" onClick={()=>nav('/login?role=student')}>Login</Button><Button onClick={()=>nav('/login?role=admin')}>Admin</Button></div></header>
    <section id="home" className="hero">
      <div className="hero-copy"><span className="eyebrow">Your Success, Our Passion</span><h1>CHEMISTRY <em>TUITION</em></h1><div className="course-strip">CLASS 11–12 <span>|</span> JEE <span>|</span> NEET <span>|</span> BOARDS</div><p>Concept clarity, NCERT-based coverage, regular tests, exam-focused preparation and personalized mentorship.</p><div className="hero-buttons"><Button onClick={()=>nav('/login?role=student')}>Student Login</Button><Button variant="outline">Explore Courses</Button></div></div>
      <div className="hero-art"><div className="chem-glow"></div><FlaskConical size={230}/><span className="molecule m1">CH₃—COOH</span><span className="molecule m2">C₆H₁₂O₆</span></div>
      <div className="feature-row">
        {[['Concept Clarity','From Basics to Advance',Target],['NCERT Based','Complete Coverage',BookOpen],['Regular Tests','Practice & Analysis',ClipboardCheck],['Personalized','Mentorship',Users]].map(([a,b,I])=><div key={a}><I/><span><b>{a}</b><small>{b}</small></span></div>)}
      </div>
    </section>
    <section id="features" className="home-section"><div className="section-heading"><span>Built for focused learning</span><h2>Everything students and teachers need</h2></div><div className="home-grid">{['Private study notes','Fee tracking','Doubt support','Instant announcements','Batch management','Student performance'].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>Simple, secure and available from desktop or mobile.</p><ArrowRight/></article>)}</div></section>
    <section id="courses" className="courses"><h2>Courses</h2><div>{['JEE','NEET','BOARDS'].map((c,i)=><article key={c}><span>{c}</span><h3>{c==='BOARDS'?'Class 11–12 Boards':`${c} Chemistry`}</h3><p>Structured lessons, regular practice and expert guidance.</p></article>)}</div></section>
    <footer id="about"><Brand/><p>© 2026 The Apex Chemistry. Learn • Practice • Excel</p></footer>
  </div>
}
