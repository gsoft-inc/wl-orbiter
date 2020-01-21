import { Input } from "@orbit-ui/react-input/src";
import { MagnifierIcon } from "@orbit-ui/icons";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

// TODO: variations doesn't make sense right now since error and success are also variations and are part of default & transparent stories.

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Input"))
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .chromaticPauseAnimationAtEnd()
            .build())
        .build();
}

stories()
    .add("default",
         () =>
             <div className="flex flex-row">
                 <div className="flex flex-row">
                     <div className="flex flex-column items-start">
                         <Input placeholder="Search..." />
                         <Input focus placeholder="Search..." />
                         <Input disabled placeholder="Search..." />
                         <Input placeholder="Search..." defaultValue="Obiwan" />
                         <Input focus placeholder="Search..." defaultValue="Obiwan" />
                         <Input disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                     </div>
                     <div className="flex flex-column items-start">
                         <Input loading className="paused" placeholder="Search..." />
                         <Input loading className="paused" disabled placeholder="Search..." />
                         <Input loading className="paused" disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused" focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused" disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused" icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                     </div>
                 </div>
                 <div className="flex flex-row">
                     <div className="flex flex-column items-start">
                         <Input className="success" placeholder="Search..." />
                         <Input className="success" focus placeholder="Search..." />
                         <Input className="success" disabled placeholder="Search..." />
                         <Input className="success" placeholder="Search..." defaultValue="Obiwan" />
                         <Input className="success" focus placeholder="Search..." defaultValue="Obiwan" />
                         <Input className="success" disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input className="success" icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input className="success" focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input className="success" disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input className="success" icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input className="success" focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input className="success" disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input className="success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input className="success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input className="success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input className="success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input className="success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input className="success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                     </div>
                     <div className="flex flex-column items-start">
                         <Input loading className="paused success" placeholder="Search..." />
                         <Input loading className="paused success" disabled placeholder="Search..." />
                         <Input loading className="paused success" disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused success" icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused success" focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused success" disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused success" icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused success" focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused success" disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                     </div>
                 </div>
                 <div className="flex flex-row">
                     <div className="flex flex-column items-start">
                         <Input error placeholder="Search..." />
                         <Input error focus placeholder="Search..." />
                         <Input error disabled placeholder="Search..." />
                         <Input error placeholder="Search..." defaultValue="Obiwan" />
                         <Input error focus placeholder="Search..." defaultValue="Obiwan" />
                         <Input error disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input error icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input error focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input error disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input error icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input error focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input error disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                     </div>
                     <div className="flex flex-column items-start">
                         <Input loading className="paused" error placeholder="Search..." />
                         <Input loading className="paused" error disabled placeholder="Search..." />
                         <Input loading className="paused" error disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" error icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused" error focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused" error disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading className="paused" error icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" error focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" error disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused" error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused" error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input loading className="paused" error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading className="paused" error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                     </div>
                 </div>
             </div>
    )
    .add("transparent",
         () =>
             <div className="flex flex-row">
                 <div className="flex flex-row">
                     <div className="flex flex-column items-start">
                         <Input transparent placeholder="Search..." />
                         <Input transparent focus placeholder="Search..." />
                         <Input transparent disabled placeholder="Search..." />
                         <Input transparent placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent focus placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input transparent icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input transparent icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input transparent icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input transparent icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input transparent icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                     </div>
                     <div className="flex flex-column items-start">
                         <Input loading transparent className="paused" placeholder="Search..." />
                         <Input loading transparent className="paused" disabled placeholder="Search..." />
                         <Input loading transparent className="paused" disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading transparent className="paused" focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading transparent className="paused" disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading transparent className="paused" focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading transparent className="paused" disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input loading transparent className="paused" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                     </div>
                 </div>
                 <div className="flex flex-row">
                     <div className="flex flex-column items-start">
                         <Input transparent className="success" placeholder="Search..." />
                         <Input transparent className="success" focus placeholder="Search..." />
                         <Input transparent className="success" disabled placeholder="Search..." />
                         <Input transparent className="success" placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent className="success" focus placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent className="success" disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent className="success" icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent className="success" focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent className="success" disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent className="success" icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent className="success" focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent className="success" disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent className="success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input transparent className="success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input transparent className="success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input transparent className="success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input transparent className="success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input transparent className="success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                     </div>
                     <div className="flex flex-column items-start">
                         <Input transparent loading className="paused success" placeholder="Search..." />
                         <Input transparent loading className="paused success" disabled placeholder="Search..." />
                         <Input transparent loading className="paused success" disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent loading className="paused success" focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent loading className="paused success" disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused success" focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused success" disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused success" icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                     </div>
                 </div>
                 <div className="flex flex-row">
                     <div className="flex flex-column items-start">
                         <Input transparent error placeholder="Search..." />
                         <Input transparent error focus placeholder="Search..." />
                         <Input transparent error disabled placeholder="Search..." />
                         <Input transparent error placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent error focus placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent error disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent error icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent error focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent error disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent error icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent error focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent error disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input transparent error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input transparent error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input transparent error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input transparent error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                         <Input transparent error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Chewbacca" />
                     </div>
                     <div className="flex flex-column items-start">
                         <Input transparent loading className="paused" error placeholder="Search..." />
                         <Input transparent loading className="paused" error disabled placeholder="Search..." />
                         <Input transparent loading className="paused" error disabled placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent loading className="paused" error focus icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent loading className="paused" error disabled icon={<MagnifierIcon />} placeholder="Search..." />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused" error focus icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused" error disabled icon={<MagnifierIcon />} placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} focus iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                         <Input transparent loading className="paused" error icon={<MagnifierIcon />} disabled iconPosition="left" placeholder="Search..." defaultValue="Obiwan" />
                     </div>
                 </div>
             </div>
    )
    .add("variations",
         () =>
             <div style={{ width: "333px" }}>
                 <Input fluid placeholder="Search..." />
                 <Input fluid focus placeholder="Search..." />
                 <Input fluid disabled placeholder="Search..." />
             </div>
    )
    .add("sizes",
         () =>
             <div className="flex flex-row">
                 <div className="flex flex-column">
                     <Input size="tiny" placeholder="Search..." />
                     <Input size="small" placeholder="Search..." />
                     <Input placeholder="Search..." />
                     <Input size="large" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} size="tiny" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} size="small" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} size="large" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} iconPosition="left" size="tiny" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} iconPosition="left" size="small" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} iconPosition="left" placeholder="Search..." />
                     <Input icon={<MagnifierIcon />} iconPosition="left" size="large" placeholder="Search..." />
                 </div>
                 <div className="flex flex-column">
                     <Input size="tiny" loading placeholder="Search..." className="paused" />
                     <Input size="small" loading placeholder="Search..." className="paused" />
                     <Input loading placeholder="Search..." className="paused" />
                     <Input size="large" loading placeholder="Search..." className="paused" />
                 </div>
             </div>
    );
