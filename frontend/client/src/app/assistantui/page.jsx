import { Box, DocumentUpload, DocumentsInStore, PromptInput, PromptOutput } from "../../ui";

export default function Rag() {
    return(
       <div className="flex flex-row gap-4 p-4 h-screen">
        <div className="flex flex-col gap-4 basis-[25%]">
            <Box className="h-[20%]">
                <DocumentUpload />
            </Box>
            <Box className="h-[80%] overflow-auto">
                <DocumentsInStore />
            </Box>
        </div>
        <div className="flex flex-col gap-4 basis-[75%]">
            <Box className="h-[70%] overflow-auto">
                <PromptOutput/>
            </Box>
            <Box className="h-[30%] overflow-auto">
                <PromptInput />
            </Box>
        </div>
       </div> 
    );
}