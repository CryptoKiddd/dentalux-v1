import { Modal} from "@mantine/core";
import "./DentistModal.css";
import { useState } from "react";

export const DentistModal = ({
  opened,
  onClose,
  title,
  img,
  position,
  courses,
  education
}) => {
  const [modalInfo, setModalInfo] = useState(false)  
  const [coursesN, setCoursesN] = useState(4)  
 
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
       
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <div className="modal-wrapper">
          <img src={img} />
           <h2>{title}</h2>
           <span>{position}</span>
           <div>
            {
              education?.map(item=><p>{item}</p>)
            }

           
           </div>
        
          
    
         
        </div>
      </Modal>
    </>
  );
};
