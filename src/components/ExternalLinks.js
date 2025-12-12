import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import { motion } from "framer-motion";

const ExternalLinks = ({ githubLink, openLink }) => {
  return (
    <span className="external-links flex items-center gap-3">
      {githubLink && (
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          style={{ color: 'var(--lightest-slate)' }}
          whileHover={{ scale: 1.15, color: 'var(--teal)', y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="View project on GitHub"
        >
          <GitHubIcon style={{ fontSize: 22 }} />
          <span 
            className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono whitespace-nowrap px-2 py-1 rounded bg-navy-light border border-teal/30"
            style={{ color: 'var(--teal)' }}
          >
            GitHub
          </span>
        </motion.a>
      )}
      {openLink && (
        <motion.a
          href={openLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          style={{ color: 'var(--lightest-slate)' }}
          whileHover={{ scale: 1.15, color: 'var(--orange)', y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open project in new tab"
        >
          <OpenInBrowserIcon style={{ fontSize: 24 }} />
          <span 
            className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono whitespace-nowrap px-2 py-1 rounded bg-navy-light border border-orange/30"
            style={{ color: 'var(--orange)' }}
          >
            Live Demo
          </span>
        </motion.a>
      )}
    </span>
  );
};

export default ExternalLinks;
