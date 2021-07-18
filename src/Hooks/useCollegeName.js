import { useEffect, useState } from "react";

const useCollegeName = () => {
  const [collegeNameList, setCollegeNameList] = useState([]);
  useEffect(() => {
    setCollegeNameList([
      {
        college: "IIT, Delhi (Delhi)",
      },
      {
        college: "IIT, Bombay (Mumbai)",
      },
      {
        college: "IIT, Kharagpur (Kharagpur)",
      },
      {
        college: "IIT, Kanpur (Kanpur)",
      },
      {
        college: "Birla Institute Of Technology & Science (Pilani)",
      },
      {
        college: "NIT, Karnataka (Mangalore)",
      },
      {
        college: "College Of Engineering, Guindy (Chennai)",
      },
      {
        college: "Netaji Subhas Institute Of Technology* (New Delhi)",
      },
      {
        college: "VIT University (Vellore)",
      },
      {
        college: "College Of Engineering, Pune (Pune)",
      },
      {
        college: "IIIT, Hyderabad (Hyderabad)",
      },
      {
        college: "IIIT, Allahabad (Allahabad)",
      },
      {
        college:
          "Indian Institute Of Technology (Indian School Of Mines), Dhanbad (Dhanbad)",
      },
      {
        college: "Delhi Technological University (New-Delhi)",
      },
      {
        college: "Manipal Institue Of Technology (Manipal)",
      },
      {
        college:
          "University Institute Of Engineering, Chandigarh University (Chandigarh)",
      },
      {
        college: "PSG College of Technology (Coimbatore)",
      },
      {
        college: "Visvesvaraya National Institute Of Technology (Nagpur)",
      },
      {
        college: "Thapar University (Patiala)",
      },
      {
        college: "M.S. Ramaiah Institute Of Technology (Bangalore)",
      },
      {
        college: "Birla Institute Of Technology (Ranchi)",
      },
      {
        college: "The National Institute Of Engineering (Mysore)",
      },
      {
        college: "University College Of Engineering (Hyderabad)",
      },
      {
        college:
          "Sri Sivasubramaniya Nadar College of Engineering (Kalavakkam)",
      },
      {
        college: "B.I.T. Sindri (Dhanbad)",
      },
      {
        college: "Institute Of Technology (Ahmedabad)",
      },
      {
        college: "SRM Engineering College (Chennai)",
      },
      {
        college: "Government College Of Engineering (Amravati)",
      },
      {
        college:
          "SVKM's NMIMS-Mukesh Patel School Of Technology Management & Engineering (Mumbai)",
      },
      {
        college: "Mepco Schlenk Engineering College (Sivakasi)",
      },
      {
        college: "Thiagarajar College Of Engineering (Madurai)",
      },
      {
        college: "Chaitanya Bharathi Institute Of Technology (Hyderabad)",
      },
      {
        college: "Dwarkadas J. Sanghvi College Of Engineering (Mumbai)",
      },
      {
        college: "Rungta College Of Engineering And Technology (Bhilai)",
      },
      {
        college: "Guru Nanak Dev Engineering College (Ludhiana)",
      },
      {
        college:
          "Zakir Husain College Of Engineering & Technology, Aligarh (Aligarh)",
      },
      {
        college: "Govt. Model Engineering College (Cochin)",
      },
      {
        college: "MIT College Of Engineering (Pune)",
      },
      {
        college: "PES University (Bangalore)",
      },
      {
        college:
          "KLE Dr M.S Sheshgiri College Of Engineering And Technology (Belgaum)",
      },
      {
        college: "Bannari Amman Institute Of Technology (Erode)",
      },
      {
        college: "Symbiosis Institute Of Technology (Pune)",
      },
      {
        college: "BMS Institute Of Technology & Management (Bangalore)",
      },
      {
        college: "BMS College Of Engineering (Bangalore)",
      },
      {
        college: "Bharati Vidyapeeth University College Of Engineering (Pune)",
      },
      {
        college: "Jawaharlal Nehru National College Of Engineering (Shimoga)",
      },
      {
        college: "K L University (Guntur)",
      },
      {
        college: "Galgotias College Of Engineering And Technology (Noida)",
      },
      {
        college:
          "Shri Ramdeobaba College Of Engineering And Management (Nagpur)",
      },
      {
        college: "Sri Sairam Engineering College (Chennai)",
      },
      {
        college: "Cummins College of Engineering for Women (Pune)",
      },
      {
        college: "Faculty Of Engineering, DIT University (Dehradun)",
      },
      {
        college:
          "Sanjivani Rural Education Society's College Of Engineering (Ahmednagar)",
      },
      {
        college: "SDM College Of Engineering & Technology (Dharwad)",
      },
      {
        college: "Pimpri Chinchwad College Of Engineering (Pune)",
      },
      {
        college: "M V J College Of Engineering (Bangalore)",
      },
      {
        college: "Sir M Visvesvaraya Institute Of Technology (Bangalore)",
      },
      {
        college: "The Northcap University (Gurgaon)",
      },
      {
        college: "Rajagiri School Of Engineering & Technology (Ernakulam)",
      },
      {
        college:
          "Indraprastha Institute Of Information Technology Delhi (New Delhi)",
      },
      {
        college: "National Institute Of Science & Technology (Berhampur)",
      },
      {
        college:
          "Muffakham Jah College Of Engineering And Technology (Hyderabad)",
      },
      {
        college: "JSS Academy Of Technical Education (Bangalore)",
      },
      {
        college: "Army Institute Of Technology (Pune)",
      },
      {
        college: "Amity School Of Engineering & Technology (Noida)",
      },
      {
        college: "Lovely Professional University (Phagwara)",
      },
      {
        college: "JIS College Of Engineering (Kalyani, West Bengal)",
      },
      {
        college: "IMS Engineering College (Ghaziabad)",
      },
      {
        college: "P.E.S. College Of Engineering (Mandya)",
      },
      {
        college: "Lakshmi Narain College Of Technology (Bhopal)",
      },
      {
        college: "Sikkim Manipal Institute Of Technology (Sikkim)",
      },
      {
        college:
          "Ganeshi Lal Bajaj Institute Of Technology & Management (Noida)",
      },
      {
        college: "SCMS School Of Engineering & Technology (Ernakulam)",
      },
      {
        college: "Kongu Engineering College (Erode)",
      },
      {
        college: "K.S.R. College Of Enginnering (Thiruchengode)",
      },
      {
        college: "Maharashtra Institute Of Technology (Aurangabad)",
      },
      {
        college: "Sri Sairam College of Engineering (Bangalore)",
      },
      {
        college: "J.B. Institute Of Technology (Dehradun)",
      },
      {
        college: "Jaipur Engineering College And Research Center (Jaipur)",
      },
      {
        college: "R.M.K. Engineering College (Kavaripettai)",
      },
      {
        college: "S.A. Engineering College (Chennai)",
      },
      {
        college:
          "University Institute Of Engineering & Technology, Panjab University (Chandigarh)",
      },
      {
        college: "Kuppam Engineering College (Kuppam)",
      },
      {
        college:
          "Asia Pacific Institute of Information Technology (APIIT SD) (Panipat)",
      },
      {
        college:
          "Malla Reddy College of Engineering & Technology (Secunderabd)",
      },
      {
        college: "CVR College Of Engineering (Hyderabad)",
      },
      {
        college:
          "Veltech High Tech Dr .Rangarajan Dr. Sakunthala Engineering College (Chennai)",
      },
      {
        college: "Vishwakarma Institute of Technology (Pune)",
      },
      {
        college: "M.S. Engineering College (Bangalore)",
      },
      {
        college: "R.M.D. Engineering College (Thiruvallur)",
      },
      {
        college: "Rajarambapu Institute Of Technology (Sangli)",
      },
      {
        college: "Shri Vishnu Engineering College For Women (Bhimavaram)",
      },
      {
        college: "Government College Of Engineering (Karad)",
      },
      {
        college:
          "Institute Of Engineering & Technology, J.K.Lakshmipat University (Jaipur)",
      },
      {
        college: "Shri Shankaracharya Technical Campus Bhilai (Bhilai)",
      },
      {
        college: "IES College Of Technology (Bhopal)",
      },
      {
        college: "Madhav Institute of Technology & Science (Gwalior)",
      },
      {
        college: "KIET Group Of Institutions (Ghaziabad)",
      },
      {
        college:
          "BRACT'S Vishwakarma Institute of Information Technology (Pune)",
      },
      {
        college: "KLS Gogte Institute Of Technology (Belagavi)",
      },

      {
        college: "Amity School Of Engineering & Technology (Noida)",
      },
      {
        college: "Army Institute Of Technology (Pune)",
      },
      {
        college:
          "Asia Pacific Institute of Information Technology (APIIT SD) (Panipat)",
      },
      {
        college: "B.I.T. Sindri (Dhanbad)",
      },
      {
        college: "BMS College Of Engineering (Bangalore)",
      },
      {
        college: "BMS Institute Of Technology & Management (Bangalore)",
      },
      {
        college:
          "BRACT'S Vishwakarma Institute of Information Technology (Pune)",
      },
      {
        college: "Bannari Amman Institute Of Technology (Erode)",
      },
      {
        college: "Bharati Vidyapeeth University College Of Engineering (Pune)",
      },
      {
        college: "Birla Institute Of Technology & Science (Pilani)",
      },
      {
        college: "Birla Institute Of Technology (Ranchi)",
      },
      {
        college: "CVR College Of Engineering (Hyderabad)",
      },
      {
        college: "Chaitanya Bharathi Institute Of Technology (Hyderabad)",
      },
      {
        college: "College Of Engineering, Guindy (Chennai)",
      },
      {
        college: "College Of Engineering, Pune (Pune)",
      },
      {
        college: "Cummins College of Engineering for Women (Pune)",
      },
      {
        college: "Centurion University (Khurda)",
      },
      {
        college: "Delhi Technological University (New-Delhi)",
      },
      {
        college: "Dwarkadas J. Sanghvi College Of Engineering (Mumbai)",
      },
      {
        college: "Faculty Of Engineering, DIT University (Dehradun)",
      },
      {
        college: "Galgotias College Of Engineering And Technology (Noida)",
      },
      {
        college:
          "Ganeshi Lal Bajaj Institute Of Technology & Management (Noida)",
      },
      {
        college: "Government College Of Engineering (Amravati)",
      },
      {
        college: "Government College Of Engineering (Karad)",
      },
      {
        college: "Govt. Model Engineering College (Cochin)",
      },
      {
        college: "Guru Nanak Dev Engineering College (Ludhiana)",
      },
      {
        college: "IES College Of Technology (Bhopal)",
      },
      {
        college: "IIIT, Allahabad (Allahabad)",
      },
      {
        college: "IIIT, Hyderabad (Hyderabad)",
      },
      {
        college: "IIT, Bombay (Mumbai)",
      },
      {
        college: "IIT, Delhi (Delhi)",
      },
      {
        college: "IIT, Kanpur (Kanpur)",
      },
      {
        college: "IIT, Kharagpur (Kharagpur)",
      },
      {
        college: "IMS Engineering College (Ghaziabad)",
      },
      {
        college:
          "Indian Institute Of Technology (Indian School Of Mines), Dhanbad (Dhanbad)",
      },
      {
        college:
          "Indraprastha Institute Of Information Technology Delhi (New Delhi)",
      },
      {
        college:
          "Institute Of Engineering & Technology, J.K.Lakshmipat University (Jaipur)",
      },
      {
        college: "Institute Of Technology (Ahmedabad)",
      },
      {
        college: "J.B. Institute Of Technology (Dehradun)",
      },
      {
        college: "JIS College Of Engineering (Kalyani, West Bengal)",
      },
      {
        college: "JSS Academy Of Technical Education (Bangalore)",
      },
      {
        college: "Jaipur Engineering College And Research Center (Jaipur)",
      },
      {
        college: "Jawaharlal Nehru National College Of Engineering (Shimoga)",
      },
      {
        college: "K L University (Guntur)",
      },
      {
        college: "K.S.R. College Of Enginnering (Thiruchengode)",
      },
      {
        college: "KIET Group Of Institutions (Ghaziabad)",
      },
      {
        college:
          "KLE Dr M.S Sheshgiri College Of Engineering And Technology (Belgaum)",
      },
      {
        college: "KLS Gogte Institute Of Technology (Belagavi)",
      },
      {
        college: "Kongu Engineering College (Erode)",
      },
      {
        college: "Kuppam Engineering College (Kuppam)",
      },
      {
        college: "Lakshmi Narain College Of Technology (Bhopal)",
      },
      {
        college: "Lovely Professional University (Phagwara)",
      },
      {
        college: "M V J College Of Engineering (Bangalore)",
      },
      {
        college: "M.S. Engineering College (Bangalore)",
      },
      {
        college: "M.S. Ramaiah Institute Of Technology (Bangalore)",
      },
      {
        college: "MIT College Of Engineering (Pune)",
      },
      {
        college: "Madhav Institute of Technology & Science (Gwalior)",
      },
      {
        college: "Maharashtra Institute Of Technology (Aurangabad)",
      },
      {
        college:
          "Malla Reddy College of Engineering & Technology (Secunderabd)",
      },
      {
        college: "Manipal Institue Of Technology (Manipal)",
      },
      {
        college: "Mepco Schlenk Engineering College (Sivakasi)",
      },
      {
        college:
          "Muffakham Jah College Of Engineering And Technology (Hyderabad)",
      },
      {
        college: "NIT, Karnataka (Mangalore)",
      },
      {
        college: "National Institute Of Science & Technology (Berhampur)",
      },
      {
        college: "Netaji Subhas Institute Of Technology* (New Delhi)",
      },
      {
        college: "P.E.S. College Of Engineering (Mandya)",
      },
      {
        college: "PES University (Bangalore)",
      },
      {
        college: "PSG College of Technology (Coimbatore)",
      },
      {
        college: "Pimpri Chinchwad College Of Engineering (Pune)",
      },
      {
        college: "R.M.D. Engineering College (Thiruvallur)",
      },
      {
        college: "R.M.K. Engineering College (Kavaripettai)",
      },
      {
        college: "Rajagiri School Of Engineering & Technology (Ernakulam)",
      },
      {
        college: "Rajarambapu Institute Of Technology (Sangli)",
      },
      {
        college: "Rungta College Of Engineering And Technology (Bhilai)",
      },
      {
        college: "S.A. Engineering College (Chennai)",
      },
      {
        college: "SCMS School Of Engineering & Technology (Ernakulam)",
      },
      {
        college: "SDM College Of Engineering & Technology (Dharwad)",
      },
      {
        college: "SRM Engineering College (Chennai)",
      },
      {
        college:
          "SVKM's NMIMS-Mukesh Patel School Of Technology Management & Engineering (Mumbai)",
      },
      {
        college:
          "Sanjivani Rural Education Society's College Of Engineering (Ahmednagar)",
      },
      {
        college:
          "Shri Ramdeobaba College Of Engineering And Management (Nagpur)",
      },
      {
        college: "Shri Shankaracharya Technical Campus Bhilai (Bhilai)",
      },
      {
        college: "Shri Vishnu Engineering College For Women (Bhimavaram)",
      },
      {
        college: "Sikkim Manipal Institute Of Technology (Sikkim)",
      },
      {
        college: "Sir M Visvesvaraya Institute Of Technology (Bangalore)",
      },
      {
        college: "Sri Sairam College of Engineering (Bangalore)",
      },
      {
        college: "Sri Sairam Engineering College (Chennai)",
      },
      {
        college:
          "Sri Sivasubramaniya Nadar College of Engineering (Kalavakkam)",
      },
      {
        college: "Symbiosis Institute Of Technology (Pune)",
      },
      {
        college: "Thapar University (Patiala)",
      },
      {
        college: "The National Institute Of Engineering (Mysore)",
      },
      {
        college: "The Northcap University (Gurgaon)",
      },
      {
        college: "Thiagarajar College Of Engineering (Madurai)",
      },
      {
        college: "University College Of Engineering (Hyderabad)",
      },
      {
        college:
          "University Institute Of Engineering & Technology, Panjab University (Chandigarh)",
      },
      {
        college:
          "University Institute Of Engineering, Chandigarh University (Chandigarh)",
      },
      {
        college: "VIT University (Vellore)",
      },
      {
        college:
          "Veltech High Tech Dr .Rangarajan Dr. Sakunthala Engineering College (Chennai)",
      },
      {
        college: "Vishwakarma Institute of Technology (Pune)",
      },
      {
        college: "Visvesvaraya National Institute Of Technology (Nagpur)",
      },
      {
        college:
          "Zakir Husain College Of Engineering & Technology, Aligarh (Aligarh)",
      },
    ]);
  }, []);
  return { collegeNameList };
};

export default useCollegeName;
