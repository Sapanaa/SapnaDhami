import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaBootstrap, FaVuejs, FaAngular
} from 'react-icons/fa';
import {
  SiRedux, SiTypescript, SiJest, SiWebpack, SiTailwindcss
} from 'react-icons/si';
import { useTheme } from '../../common/ThemeContext';



const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Vue.js', icon: <FaVuejs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Webpack', icon: <SiWebpack /> },
      { name: 'Jest', icon: <SiJest /> },
    ],
  },
];
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle" style={{ fontFamily: 'GTA', fontSize: '52px', color: '#0288D1', textShadow: '2px 2px black' }}>Skills And technologies</h1>
     {skillGroups.map((group, index) => (
        <div key={index} className={styles.group}>
          <h2 className={styles.category}>{group.category}</h2>
          <div className={styles.grid}>
            {group.skills.map((skill, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{skill.icon}</div>
                <div className={styles.name} style={{
                    color: theme === 'light' ? 'black' : 'white',  // Dynamic color based on theme
                  }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
