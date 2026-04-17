export interface Certificate {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  achievement: string;
  image: string;
  file: string;
  type: 'pdf' | 'image';
}

export const certificates: Certificate[] = [
  {
    id: "CERT_01",
    title: "Bootcamp AI 101",
    subtitle: "Exploring Object Detection with NVIDIA Expert",
    organization: "HIMTI BINUS University Malang",
    date: "Oct 2024",
    achievement: "Participant",
    image: "/Sertif/bootcampai.jpeg",
    file: "/Sertif/bootcampai.jpeg",
    type: 'image'
  },
  {
    id: "CERT_02",
    title: "Dean's List Certificate",
    subtitle: "Outstanding Academic Achievement",
    organization: "School of Computer Science, BINUS",
    date: "Dec 2025",
    achievement: "Dean's List 2025",
    image: "/Sertif/fotodeanlist.png",
    file: "/Sertif/YOHANES DWI SAKTI.pdf",
    type: 'pdf'
  },
  {
    id: "CERT_03",
    title: "C Programming",
    subtitle: "Certificate of Completion",
    organization: "BNCC (Computer Club)",
    date: "Aug 2025",
    achievement: "High Distinction",
    image: "/Sertif/Yohanes Dwi Sakti.png",
    file: "/Sertif/Yohanes Dwi Sakti.png",
    type: 'image'
  }
];
