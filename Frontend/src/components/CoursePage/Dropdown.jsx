import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";


function Dropdown({currentSection, setCurrentSection, title, num, total, finished, content}) {



    function clickHandler(){
        if(currentSection != title){
            setCurrentSection(title)
        } else
        setCurrentSection("")
    }

    return (
        <Accordion expanded={currentSection == title ? true : false} onChange={clickHandler()}>
        <AccordionSummary sx={{borderBottom: '1px solid rgba(0, 0, 0, .125)', maxHeight: '64px', minHeight: '64px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)'}}}
            expandIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className="flex">
                <div></div>
                    <div className="flex flex-col">
                        <div className="font-weight-bold">{`Section ${num} : ${title}`}</div>
                        {`${finished} / ${total}`} | {`${finished/total * 100}%`}
                    </div>
                </div>
        </AccordionSummary>

        <AccordionDetails>
            
            {"1. Introduction"}
        </AccordionDetails>
    </Accordion>
    )
}


export default Dropdown;