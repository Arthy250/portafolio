import ProgressBar from "@ramonak/react-progress-bar";
import { SkillsDB } from "../db/skillsDB";
import { SkillDetalle } from '../types/types';

const Skill = () => {

    return ( 
        <>
        {SkillsDB.map( (skill:SkillDetalle) => 
            (
                <div key = {skill.id}>
                    <p>{skill.nombre}</p>
                    <ProgressBar
                        className="progressBar" 
                        completed={skill.porcentaje}
                        bgColor="#124559"
                        borderRadius="50px"
                        labelAlignment="center"
                        baseBgColor="#36363C"
                        labelSize="12px"
                        animateOnRender
                        maxCompleted={100}
                        customLabel={skill.label}
                    />
                </div>
            )
        )}
        
        </>
     );
}
 
export default Skill;