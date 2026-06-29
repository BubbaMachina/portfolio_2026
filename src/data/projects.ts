export type Discipline = 'Robotics' | 'Embedded' | 'Software' | 'Energy' | 'Education'

export interface Project {
  slug: string
  title: string
  eyebrow: string
  year: string
  category: Discipline
  summary: string
  description: string
  image: string
  gallery?: string[]
  tags: string[]
  status?: string
  github?: string
  external?: string
  challenge: string
  approach: string
  outcome: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'smart-outlet',
    title: 'Connected smart outlet',
    eyebrow: 'Capstone · IoT systems',
    year: '2023',
    category: 'Embedded',
    summary: 'An ESP32-based power hub that turns four receptacles into a measurable, controllable IoT system.',
    description: 'My final-year electrical engineering capstone connected hardware control, energy monitoring, cloud data logging and a React interface in one practical prototype.',
    image: '/assets/smart-outlet.png',
    gallery: ['/assets/fusion-enclosure-exterior.png', '/assets/fusion-enclosure-interior.png'],
    tags: ['ESP32', 'React', 'IoT', 'Power electronics', 'Fusion 360'],
    status: 'Capstone project',
    challenge: 'Build a safe, useful bridge between mains power hardware and a modern data interface, without treating the enclosure, electronics and software as separate problems.',
    approach: 'Designed the electronics and custom enclosure together, then used the ESP32 as the control and telemetry layer. A React application made switching states and logged energy data understandable at a glance.',
    outcome: 'A full-stack physical computing prototype that demonstrates my core working style: electrical design, embedded code, mechanical packaging and user-facing software developed as one system.',
    featured: true,
  },
  {
    slug: 'bma-01-robot-arm',
    title: 'BMA-01 robotic arm',
    eyebrow: 'Robotics · Sensor fusion',
    year: '2025—Now',
    category: 'Robotics',
    summary: 'A compact, 3D-printed arm used to explore kinematics, low-cost actuation and sensor-informed control.',
    description: 'BMA-01 is a small robotic arm that has evolved across CAD, fabrication, Arduino control and graduate work in sensor fusion. It is both a working mechanism and a reusable research platform.',
    image: '/assets/sg90-arm.png',
    gallery: ['/assets/robot-arm-cad.png', '/assets/career-day-projects.png'],
    tags: ['Arduino', 'Python', 'Sensor fusion', 'Fusion 360', '3D printing'],
    status: 'Active development',
    github: 'https://github.com/BubbaMachina/BMA-01-v1.0',
    challenge: 'Create an affordable arm whose mechanical design, embedded control and sensing can be changed quickly enough for coursework and independent experiments.',
    approach: 'Modelled the arm and base in Fusion 360, fabricated iterations on desktop printers and developed servo control around accessible Arduino hardware. A separate graduate project adds sensor-fusion experiments.',
    outcome: 'A modular platform that now supports demonstrations, teaching and continued control-system experiments instead of ending as a one-off class build.',
    featured: true,
  },
  {
    slug: 'scara-ros2',
    title: 'SCARA arm in ROS 2',
    eyebrow: 'Graduate robotics · Simulation',
    year: '2025',
    category: 'Robotics',
    summary: 'A team robotics project connecting a SCARA manipulator model with the ROS 2 ecosystem.',
    description: 'Built as part of graduate robotics coursework, this project develops the software architecture and simulation workflow around a SCARA robot using ROS 2.',
    image: '/assets/robot-arm-cad.png',
    tags: ['ROS 2', 'Python', 'Robotics', 'Simulation', 'Team project'],
    status: 'Course project',
    github: 'https://github.com/BubbaMachina/MAI5304-SCARA-ARM-Group-Project-2025',
    external: 'https://bubbamachina.wordpress.com/2025/12/01/applied-robotics-ros2-introduction/',
    challenge: 'Move from standalone robotics scripts toward the message-driven architecture, tooling and simulation conventions used in real robotics stacks.',
    approach: 'Used ROS 2 nodes, topics and packages to separate concerns and create a workflow the whole group could inspect, run and extend.',
    outcome: 'A practical introduction to modern robotics middleware and a foundation for moving future arm prototypes from direct control into a more capable robotics stack.',
  },
  {
    slug: 'search-algorithms',
    title: 'Search algorithms in motion',
    eyebrow: 'MSc Artificial Intelligence',
    year: '2025',
    category: 'Software',
    summary: 'Python search strategies evaluated inside a physics simulation rather than only on paper.',
    description: 'A graduate group project that implements and compares AI search algorithms, then makes their behavior tangible inside a Python physics environment.',
    image: '/assets/career-day-projects.png',
    tags: ['Python', 'AI search', 'Physics simulation', 'Algorithms', 'Research'],
    status: 'Course project',
    github: 'https://github.com/BubbaMachina/MAI-5100-GrpProject/tree/final',
    challenge: 'Translate abstract search concepts into a system where the consequences of state representation, heuristics and exploration strategy can be seen and evaluated.',
    approach: 'Implemented the algorithms in Python and integrated them with a physics-based simulation, allowing results to be compared through both metrics and motion.',
    outcome: 'A stronger link between AI theory and embodied systems—particularly relevant to my longer-term focus on intelligent mechatronics.',
    featured: true,
  },
  {
    slug: 'printed-quadcopter',
    title: '3D-printed quadcopter',
    eyebrow: 'Flight systems · Rapid prototyping',
    year: '2024—Now',
    category: 'Robotics',
    summary: 'A custom printed airframe and electronics platform evolving toward a reverse-engineered flight controller.',
    description: 'This ongoing drone program combines mechanical iteration, embedded systems and flight-control study. The current phase focuses on reverse engineering a MultiWii flight controller.',
    image: '/assets/printed-drone.png',
    gallery: ['/assets/career-day-projects.png', '/assets/lipo-charger-pcb.png'],
    tags: ['Flight control', 'PCB design', '3D printing', 'MultiWii', 'Embedded C'],
    status: 'Active development',
    challenge: 'Develop a drone as an understandable system—from airframe and power electronics to the control logic that keeps it stable—rather than assemble an opaque kit.',
    approach: 'Printed and iterated the frame, integrated motors and power distribution, and used the build as a test platform. Current work traces the MultiWii hardware and software architecture to inform a custom controller.',
    outcome: 'A living mechatronics project that creates room for deeper work in controls, PCB layout, embedded firmware and sensor fusion.',
    featured: true,
  },
  {
    slug: 'lipo-charger',
    title: 'Custom LiPo charger PCB',
    eyebrow: 'Electronics · PCB design',
    year: '2025',
    category: 'Embedded',
    summary: 'A compact lithium-polymer charging board taken from circuit study through fabrication and bench test.',
    description: 'A hands-on PCB exercise focused on understanding the complete path from schematic and layout decisions to assembly and electrical validation.',
    image: '/assets/lipo-charger-pcb.png',
    gallery: ['/assets/lipo-charger-test.png'],
    tags: ['PCB design', 'SMD soldering', 'LiPo', 'Electronics test'],
    status: 'Prototype tested',
    challenge: 'Reproduce a compact battery-charging circuit while respecting layout, component selection and the practical realities of hand assembly.',
    approach: 'Studied the reference circuit, created the board layout, assembled the SMD components and validated the result on the bench with a multimeter and a controlled load.',
    outcome: 'A tested board and more importantly a repeatable PCB workflow that feeds directly into later flight-controller and robotics designs.',
  },
  {
    slug: 'energy-auditing-guyana',
    title: 'Energy audits in Guyana',
    eyebrow: 'Guyana Energy Agency · Field work',
    year: '2024',
    category: 'Energy',
    summary: 'Site-based energy assessment work spanning public facilities, photovoltaic systems and EV training.',
    description: 'Work with the Guyana Energy Agency connected classroom energy concepts to operating facilities, real stakeholders and the practical constraints of implementation.',
    image: '/assets/energy-audit-gea.png',
    gallery: ['/assets/energy-audit-school.png', '/assets/energy-audit-team.png'],
    tags: ['Energy auditing', 'Photovoltaics', 'Electric vehicles', 'Field assessment'],
    status: 'Professional training',
    challenge: 'Turn measured conditions and stakeholder observations into useful energy-efficiency findings for real facilities.',
    approach: 'Participated in site assessments and technical training, including photovoltaic and electric-vehicle content delivered through the agency and Legacy EV.',
    outcome: 'Practical exposure to energy systems at facility scale and a valuable systems perspective that now informs my work as a facilities project engineer.',
  },
  {
    slug: 'engineering-education',
    title: 'Teaching the build process',
    eyebrow: 'University of Guyana · Education',
    year: '2022—Now',
    category: 'Education',
    summary: 'Supporting laboratories and tutorials across programming, PLCs, electronics and foundational electrical engineering.',
    description: 'As an instructor and laboratory technician, I help students move from equations and diagrams to instruments, code and working prototypes.',
    image: '/assets/career-day-lab.png',
    gallery: ['/assets/plc-lab.png', '/assets/arduino-projects.png', '/assets/arduino-led-lab.png'],
    tags: ['PLC', 'Arduino', 'Laboratory instruction', 'Electronics', 'Mentoring'],
    status: 'Current role',
    challenge: 'Make multidisciplinary engineering approachable while maintaining the safety, rigor and troubleshooting habits that good lab work requires.',
    approach: 'Prepare and support labs, coach students through PLC and programming exercises, maintain equipment and use my own mechatronic builds to make concepts concrete.',
    outcome: 'A teaching practice centered on confidence through experimentation—and a feedback loop that makes me a clearer engineer and communicator.',
    featured: true,
  },
]

export const disciplines: Array<'All' | Discipline> = ['All', 'Robotics', 'Embedded', 'Software', 'Energy', 'Education']
