export const defaultNotesPdf = '/pdfs/sample-notes.pdf';

export const courseSubjectCatalog = {
  bca: [
    ['Principles of Programming Using ‘C’- I', 'Computer Fundamentals', 'Mathematical Foundations', 'Digital Electronics', 'E-Commerce & Application'],
    ['Computer System Architecture', 'Principles of Programming Using ‘C’- II', 'Statistics', 'Discrete Mathematics', 'Cyber Security'],
    ['Data Structures (DSA)', 'Data Communication & Computer Network', 'Object Oriented Methodology using C++', 'Introduction to Artificial Intelligence', 'Blockchain Technology'],
    ['Java Programming', 'Software Engineering', 'Database Management Systems', 'Introduction to Python', 'Operating Systems'],
    ['Multimedia and Graphics', 'Design and Analysis of Algorithm', 'Introduction to Data Science', 'Introduction to PHP'],
    ['Cloud Computing', 'Data Mining', 'Soft Computing']
  ],
  bba: [
    ['Principles of Management', 'Business Economics', 'Business Communication', 'Accounting'],
    ['Organizational Behavior', 'Business Statistics', 'Marketing Management', 'Business Law'],
    ['Human Resource Management', 'Cost & Management Accounting', 'Business Environment'],
    ['Financial Management', 'Research Methodology', 'Indian Banking System', 'Company Law'],
    ['Entrepreneurship Development', 'Strategic Management', 'Income Tax Law'],
    ['International Business', 'Project Management & Viva', 'Business Ethics']
  ],
  ba: [
    ['Ancient History', 'Modern History', 'Geography', 'Education', 'Sociology', 'English Literature', 'Hindi Literature', 'CTS (Co-Curricular)'],
    ['Ancient History', 'Modern History', 'Geography', 'Education', 'Sociology', 'English Literature', 'Hindi Literature', 'CTS (Co-Curricular)'],
    ['Ancient History', 'Modern History', 'Geography', 'Education', 'Sociology', 'English Literature', 'Hindi Literature', 'CTS (Co-Curricular)'],
    ['Ancient History', 'Modern History', 'Geography', 'Education', 'Sociology', 'English Literature', 'Hindi Literature', 'CTS (Co-Curricular)'],
    ['Ancient History', 'Modern History', 'Geography', 'Education', 'Sociology', 'English Literature', 'Hindi Literature', 'CTS (Co-Curricular)'],
    ['Ancient History', 'Modern History', 'Geography', 'Education', 'Sociology', 'English Literature', 'Hindi Literature', 'CTS (Co-Curricular)']
  ],
  bcom: [
    ['Financial Accounting', 'Business Organization', 'Business Communication', 'Micro Economics'],
    ['Corporate Accounting', 'Business Law', 'Macro Economics', 'Business Statistics'],
    ['Company Law', 'Cost Accounting', 'Principles of Business Management', 'Inventory'],
    ['Income Tax Law & Accounts', 'Fundamentals of Marketing', 'Monetary Economics', 'Auditing'],
    ['Corporate Tax Planning', 'Goods & Services Tax (GST)', 'Financial Management'],
    ['Management Accounting', 'Human Resource Accounting', 'Auditing & Governance']
  ],
  bed: [
    ['Childhood and Growing Up', 'Contemporary India & Education', 'Language Across Curriculum', 'ICT'],
    ['Learning & Teaching', 'Pedagogy of School Subject 1 & 2', 'Drama & Art in Education'],
    ['School Internship (16 Weeks)', 'Micro Teaching Competency', 'Preparation of TLM'],
    ['Gender School & Society', 'Creating an Inclusive School', 'Assessment for Learning']
  ],
  bsc: [
    ['Mechanics & Wave Motion', 'Calculus & Algebra', 'Fundamentals of Chemistry', 'Thermal Physics & Semiconductor', 'Differential Equations', 'Organic & Inorganic Chemistry', 'Computer Science Basics', 'CTS (Co-Curricular)'],
    ['Mechanics & Wave Motion', 'Calculus & Algebra', 'Fundamentals of Chemistry', 'Thermal Physics & Semiconductor', 'Differential Equations', 'Organic & Inorganic Chemistry', 'Computer Science Basics', 'CTS (Co-Curricular)'],
    ['Mechanics & Wave Motion', 'Calculus & Algebra', 'Fundamentals of Chemistry', 'Thermal Physics & Semiconductor', 'Differential Equations', 'Organic & Inorganic Chemistry', 'Computer Science Basics', 'CTS (Co-Curricular)'],
    ['Mechanics & Wave Motion', 'Calculus & Algebra', 'Fundamentals of Chemistry', 'Thermal Physics & Semiconductor', 'Differential Equations', 'Organic & Inorganic Chemistry', 'Computer Science Basics', 'CTS (Co-Curricular)'],
    ['Mechanics & Wave Motion', 'Calculus & Algebra', 'Fundamentals of Chemistry', 'Thermal Physics & Semiconductor', 'Differential Equations', 'Organic & Inorganic Chemistry', 'Computer Science Basics', 'CTS (Co-Curricular)'],
    ['Mechanics & Wave Motion', 'Calculus & Algebra', 'Fundamentals of Chemistry', 'Thermal Physics & Semiconductor', 'Differential Equations', 'Organic & Inorganic Chemistry', 'Computer Science Basics', 'CTS (Co-Curricular)']
  ],
  dled: [
    ['Bal Vikas evam Seekhne ki Prakriya', 'Shikshan Adhigam Siddhant', 'Vigyan', 'Ganit', 'Hindi'],
    ['Vartaman Bhartiya Samaj aur Prathmik Shiksha', 'Naveen Prayas', 'English', 'Samajik Adhyayan'],
    ['Shaikshik Mulyankan', 'Samaveshi Shiksha', 'Sanskrit/Urdu', 'Computer Shiksha', 'Internship'],
    ['Aarambhik Shtar Bhasha evam Ganit Pathan', 'Shaikshik Prabandhan', 'Shanti Shiksha']
  ],
  llb: [
    ['Constitutional Law I', 'Law of Contract I', 'Law of Torts', 'Jurisprudence I'],
    ['Constitutional Law II', 'Special Contract', 'Family Law I', 'Law of Crimes (IPC)'],
    ['Family Law II', 'Criminal Procedure Code (CrPC)', 'Property Law', 'Public International Law'],
    ['Civil Procedure Code (CPC)', 'Law of Evidence', 'Administrative Law', 'Labour Laws'],
    ['Company Law', 'Environmental Law', 'Professional Ethics', 'Intellectual Property Laws (IPR)'],
    ['Moot Court Exercise', 'Drafting Pleading & Conveyance', 'ADR', 'Human Rights Law']
  ],
  ma: [
    ['Advanced Literary Theory', 'Research Methodology', 'Classical Political Thought', 'Sociological Concepts'],
    ['Comparative Literature', 'Modern Indian Historiography', 'Indian Political System', 'Stratification'],
    ['Specialized Thematic Elective', 'Interdisciplinary Seminars', 'Public Policy Analysis'],
    ['Master Dissertation / Thesis Submission', 'Comprehensive Academic Viva', 'Research Workshop']
  ]
};

export const subjectPdfRegistry = {
  bca: {
    1: {
      'Principles of Programming Using ‘C’- I': '/c-programming.pdf',
      'Computer Fundamentals': '/fundamentle.pdf',
      'Mathematical Foundations': '/math.pdf',
      'Digital Electronics': '/digital.pdf',
      'E-Commerce & Application': '/e-com.pdf'
    },
    3: {
      'Data Structures (DSA)': '/DSA.pdf',
      'Object Oriented Methodology using C++': '/cpp-programming.pdf'
    },
    4: {
      'Introduction to Python': '/python-oop.pdf'
    }
  },
  ba: {
    1: {
      'English Literature': '/English1st.pdf',
      Geography: '/geo.pdf'
    }
  }
};

const normalizeSubjectName = (subject) => (
  typeof subject === 'string' ? subject.trim() : subject?.name?.trim()
);

const getSemesterNumber = (semester, fallbackIndex = 0) => {
  const semesterText = typeof semester === 'string' ? semester : semester?.sem;
  const match = String(semesterText || '').match(/\d+/);
  return match ? Number(match[0]) : fallbackIndex + 1;
};

export function getRegisteredSubjects(courseKey, semester) {
  const semesterNumber = getSemesterNumber(semester);
  return courseSubjectCatalog[String(courseKey || '').toLowerCase()]?.[semesterNumber - 1] || [];
}

export function getRegisteredSemesters(courseKey) {
  const semesters = courseSubjectCatalog[String(courseKey || '').toLowerCase()] || [];
  return semesters.map((_, index) => `Sem ${index + 1}`);
}

export function getSubjectPdf(semester, subject, courseKey = '', semesterNumber = 1) {
  const subjectName = normalizeSubjectName(subject);
  const registryPdf = subjectName
    ? subjectPdfRegistry[String(courseKey || '').toLowerCase()]?.[Number(semesterNumber)]?.[subjectName]
    : null;
  const semesterPdf = subjectName ? semester?.notesPdfs?.[subjectName] : null;
  const pdfUrl = registryPdf || semesterPdf;
  return typeof pdfUrl === 'string' && pdfUrl.trim() ? pdfUrl : defaultNotesPdf;
}

export function buildPdfRegistry(semesters = [], courseKey = '') {
  return semesters.flatMap((semester, semesterIndex) => {
    const semesterNumber = getSemesterNumber(semester, semesterIndex);
    const subjects = Array.isArray(semester.subjects)
      ? semester.subjects
      : String(semester.subjects || '').split(',');
    const semesterName = semester.sem || `Semester ${semesterNumber}`;

    return subjects
      .map(normalizeSubjectName)
      .filter(Boolean)
      .map((subject) => ({
        id: `${courseKey}::${semesterName}::${subject}`,
        courseKey,
        semesterId: `${courseKey}::${semesterIndex}`,
        semester: semesterName,
        semesterNumber,
        subject,
        pdfUrl: getSubjectPdf(semester, subject, courseKey, semesterNumber)
      }));
  });
}
