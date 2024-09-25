import { Div } from "@components/html";
import { H2, Paragraph } from "@components/typography";
import { Image } from "@components/image";
import { Inline } from "@components/layout";
import { Launch } from "./assets";
import { Link } from "@components/link";
import { createLinkTestSuite } from "./createLinkTestSuite";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Link-hopper")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

function LaunchImage() {
    return (
        <Image width="325" height="216" src={Launch} alt="SpaceX Launch" />
    );
}

function Card() {
    return (
        <Div>
            <H2 size="lg">
                SpaceX delays launch of South Korean military satellite
            </H2>
            <Paragraph>
                SpaceX postponed the upcoming launch of a South Korean military satellite Monday (July 13), due to hardware issues with the Falcon 9 rocket.
            </Paragraph>
        </Div>
    );
}

createLinkTestSuite(<Link><LaunchImage /></Link>, stories("/image"))
    .add("rounded", () =>
        <Link shape="rounded" focus href="#">
            <Image width="4.5rem" height="4.5rem" src={Launch} alt="SpaceX Launch" />
        </Link>
    )
    .add("circular", () =>
        <Link shape="circular" focus href="#">
            <Image width="4.5rem" height="4.5rem" src={Launch} alt="SpaceX Launch" />
        </Link>
    )
    .add("box", () =>
        <Link shape="box" focus href="#">
            <Image width="4.5rem" height="4.5rem" src={Launch} alt="SpaceX Launch" />
        </Link>
    );

createLinkTestSuite(<Link><Card /></Link>, stories("/card"));

stories()
    .add("styling", () =>
        <Inline>
            <Link border="warning" href="#">
                <LaunchImage />
            </Link>
            <Link className="border-red" href="#">
                <LaunchImage />
            </Link>
            <Link style={{ border: "1px solid red" }} href="#">
                <LaunchImage />
            </Link>
        </Inline>
    );

