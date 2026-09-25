const sharedFallback = {
  duration: '3 Years',
  seats: '60 Seats',
  fees: 'Contact college office',
  eligibility: '10+2 or graduation from a recognized board or university.',
  syllabus: 'Comprehensive core and elective subjects structured as per the university curriculum.',
  timings: 'Standard college hours: 09:00 AM - 03:00 PM.',
  hod: { name: 'Department HOD', designation: 'Faculty Head' },
  directPassTips: 'Revise unit summaries, solve the last three years of model papers, and maintain regular attendance for internal assessment marks.'
};

export const courses = [
  { id: 'bca', name: 'BCA', fullName: 'Bachelor of Computer Applications', icon: '💻', color: '#1769e0', duration: '3 Years (6 Semesters)', seats: '60 Seats', fees: '₹35,000 per year', eligibility: '10+2 in any stream; Mathematics or Computer Science is preferred, with a minimum of 45% marks.', syllabus: 'Programming in C/C++, Java, Data Structures, Web Development, DBMS, Software Engineering, and Python.', timings: 'Morning shift: 09:00 AM - 02:00 PM. Practical labs every Tuesday and Thursday.', hod: { name: 'Dr. Alok Sharma', designation: 'HOD - Computer Science' }, directPassTips: 'Focus on previous year question papers, practise C and Java syntax daily, and write clear algorithm steps in exams.' },
  { id: 'bsc', name: 'BSc', fullName: 'Bachelor of Science', icon: '🔬', color: '#16866a', duration: '3 Years', seats: '120 Seats', fees: '₹25,000 per year', eligibility: '10+2 in the Science stream (PCM or PCB) with a minimum 45% aggregate.', syllabus: 'Physics, Chemistry, Mathematics, Botany, and Zoology as per the selected combination.', timings: 'Morning shift: 09:00 AM - 01:30 PM. Lab sessions are mandatory.', hod: { name: 'Dr. Sunita Verma', designation: 'HOD - Science Faculty' }, directPassTips: 'Memorize core derivations, draw neat labelled diagrams, and practise numerical problems formula by formula.' },
  { id: 'bba', name: 'BBA', fullName: 'Bachelor of Business Administration', icon: '📊', color: '#c2631a' },
  { id: 'deled', name: 'D.El.Ed', fullName: 'Diploma in Elementary Education', icon: '📚', color: '#b18400' },
  { id: 'llb', name: 'LLB', fullName: 'Bachelor of Laws', icon: '⚖️', color: '#7546a8' },
  { id: 'ba', name: 'BA', fullName: 'Bachelor of Arts', icon: '📖', color: '#b43c68' },
  { id: 'bcom', name: 'B.Com', fullName: 'Bachelor of Commerce', icon: '💼', color: '#b45309' },
  { id: 'bed', name: 'B.Ed', fullName: 'Bachelor of Education', icon: '🎓', color: '#147d83', duration: '2 Years', seats: '100 Seats', fees: '₹51,250 per year', eligibility: 'Graduation or post-graduation with at least 50% marks from a recognized university.', syllabus: 'Childhood and Growing Up, Contemporary India and Education, Learning and Teaching, and subject pedagogy.', timings: 'Day shift: 10:00 AM - 03:00 PM. Includes micro-teaching and internship.', hod: { name: 'Dr. R. K. Mishra', designation: 'Principal / HOD Education' }, directPassTips: 'Use flowcharts for psychological theories, structure answers with headings, and focus on teaching methodologies.' }
].map((course) => ({ ...sharedFallback, ...course }));

export const courseMap = Object.fromEntries(courses.map((course) => [course.id, course]));
export const courseFallback = sharedFallback;
