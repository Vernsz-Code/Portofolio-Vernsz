import {
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  CardBody,
  Image,
  Link,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import ScrnProject1 from "/images/ScrnProject1.png";
import ScrnProject2 from "/images/ScrnProject2.png";
import ScrnNC1 from "/images/ScrnNC1.png";
import ScrnNC2 from "/images/ScrnNC2.png";
import ScrnOG1 from "/images/ScrnOG1.png";
import { FaGithub } from "react-icons/fa";

function ProjectComponent() {
  const { t } = useTranslation();
  let tabs = [
    {
      id: "complete",
      label: t("complete"),
      content: [
        {
          title: "Cashier App",
          image: ScrnProject1,
          description: "1",
          github: "https://github.com/Vernsz-Code/cashier",
          api: "",
        },
        {
          title: "Cashier Web",
          image: ScrnProject2,
          description: "2",
          github: "https://github.com/Vernsz-Code/Cokro-web-cashier",
          api: "https://github.com/Vernsz-Code/api-cokro-",
        },
      ],
    },
    {
      id: "onGoing",
      label: t("onGoing"),
      content: [
        {
          title: "Horror Game (Roblox)",
          image: ScrnOG1,
          description: "5",
        },
      ],
    },
    {
      id: "notContinue",
      label: t("notContinue"),
      content: [
        {
          title: "Tokoko",
          image: ScrnNC1,
          description: "3",
          github: "https://github.com/Vernsz-Code/tokoko",
          api: "https://github.com/Vernsz-Code/api-tokoko",
        },
        {
          title: "Tefa App Chat",
          image: ScrnNC2,
          description: "4",
          github: "https://github.com/Vernsz-Code/frontEndTefaApp",
          api: "https://github.com/Vernsz-Code/backEndTefaApp",
        },
      ],
    },
  ];

  return (
    <div className=" flex w-full flex-col items-center gap-3" id="project">
      <div className="w-full p-4 flex flex-col gap-5 items-end">
        <span className=" text-xl underline decoration-blue-500 underline-offset-2">
          {t("list")} 
           <span className=" font-bold text-blue-500"> {t("project")} </span>
          {t("aboutProject")}
        </span>
      </div>
      <Tabs
        aria-label="Dynamic tabs"
        variant="bordered"
        color="primary"
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className="w-full">
            <div className="w-full py-6 rounded-md flex flex-col sm:grid sm:grid-cols-4 items-center px-0 sm:px-3 gap-3">
              {item.content.map((project, index) => (
                <Card key={index} className="py-2  px-0 sm:px-3 w-10/12 sm:w-full mb-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-large">{project.title}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2 items-center">
                    <Image
                      alt={`${project.title} image`}
                      isZoomed
                      className="object-cover rounded-xl"
                      src={project.image}
                      width={270}
                    />
                    <Accordion
                      motionProps={{
                        variants: {
                          enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                              height: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                              },
                              opacity: {
                                easings: "ease",
                                duration: 1,
                              },
                            },
                          },
                          exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: {
                                easings: "ease",
                                duration: 0.25,
                              },
                              opacity: {
                                easings: "ease",
                                duration: 0.3,
                              },
                            },
                          },
                        },
                      }}
                    >
                      <AccordionItem
                        key="1"
                        aria-label={t("description")}
                        title={t("description")}
                        className="w-full font-bold"
                      >
                        {project.github && project.github.length > 0 ? (
                          <Link
                            href={project.github}
                            isExternal
                            underline="hover"
                            className="w-full"
                            showAnchorIcon
                            anchorIcon={<FaGithub />}
                          >
                            github
                          </Link>
                        ) : null}
                        {project.api && project.api.length > 0 ? (
                          <Link
                            href={project.api}
                            isExternal
                            underline="hover"
                            className="w-full"
                            showAnchorIcon
                            anchorIcon={<FaGithub />}
                          >
                            github (Api)
                          </Link>
                        ) : null}
                        <span className="font-normal">
                          {t(`project-${project.description}`)}
                        </span>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default ProjectComponent;
