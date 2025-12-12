import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { motion, AnimatePresence } from "framer-motion";

function TabPanel(props) {
  const { children, value, index, isHorizontal, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

function a11yProps(index, isHorizontal) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = (isHorizontal) => makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    minHeight: 300,
    flexDirection: isHorizontal ? "column" : "row",
  },
  tabs: {
    borderRight: isHorizontal ? "none" : `1px solid rgba(136, 146, 176, 0.2)`,
    minWidth: isHorizontal ? "100%" : 200,
    "& .MuiTab-root": {
      color: "var(--slate)",
      fontSize: "13px",
      textTransform: "none",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      textAlign: "left",
      padding: "12px 20px",
      minHeight: "48px",
      "&:hover": {
        color: "var(--teal)",
        backgroundColor: "rgba(20, 184, 166, 0.05)",
      },
      "&.Mui-selected": {
        color: "var(--teal)",
        backgroundColor: "rgba(20, 184, 166, 0.1)",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "var(--teal)",
      width: "2px",
    },
  },
}));

const JobList = () => {
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 768);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const classes = useStyles(isHorizontal)();

  const experienceItems = {
    "wemedev": {
      jobTitle: "CEO & Founder",
      duration: "2022 - Present",
      desc: [
        "Leading a digital agency focused on building innovative and reliable digital solutions for startups and companies.",
        "Developing web and mobile applications using modern technologies including React, Laravel, Node.js, Flutter, and React Native.",
        "Designing and implementing RESTful APIs and scalable architectures following Clean Architecture principles.",
        "Managing client relationships, project delivery, and team collaboration to ensure high-quality outcomes.",
        "Providing technical consulting and implementing AI-powered solutions for clients.",
      ],
    },
    "Freelance": {
      jobTitle: "Software Engineer",
      duration: "2020 - 2022",
      desc: [
        "Developed full-stack web applications for various clients using React, Laravel, Symfony, and Node.js.",
        "Built cross-platform mobile applications using Flutter and React Native for iOS and Android.",
        "Designed and implemented RESTful APIs with proper authentication and documentation.",
        "Applied component-based design and Atomic Design principles for maintainable codebases.",
        "Performed manual testing, API testing, and QA to ensure product quality.",
        "Collaborated with clients to understand requirements and deliver solutions on time and within budget.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        aria-label="Experience tabs"
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={key}
            label={isHorizontal ? `0${i + 1}.` : key}
            {...a11yProps(i, isHorizontal)}
          />
        ))}
      </Tabs>
      <AnimatePresence mode="wait">
        {Object.keys(experienceItems).map((key, i) => (
          value === i && (
            <TabPanel key={key} value={value} index={i} isHorizontal={isHorizontal}>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={value}
              >
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ 
                    color: 'var(--lightest-slate)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {experienceItems[key].jobTitle}{" "}
                  <span className="text-teal">@ {key}</span>
                </h3>
                <div 
                  className="text-sm font-mono mb-6"
                  style={{ color: 'var(--slate)' }}
                >
                  {experienceItems[key].duration}
                </div>
                <ul className="space-y-4">
                  {experienceItems[key].desc.map((descItem, idx) => (
                    <motion.li
                      key={idx}
                      className="text-lg leading-relaxed relative pl-8"
                      style={{ 
                        color: 'var(--slate)',
                        fontFamily: 'var(--font-body)',
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span 
                        className="absolute left-0 text-teal font-mono text-xl"
                        style={{ lineHeight: '1.2' }}
                      >
                        ▹
                      </span>
                      {descItem}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabPanel>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default JobList;
