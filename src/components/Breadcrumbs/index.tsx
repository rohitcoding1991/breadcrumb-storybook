"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import HomeIcon from "../icons/HomeIcon";
import SlashIcon from "../icons/SlashIcon";
export interface BreadcrumbsProps {
  homeElement?: string | React.ComponentType<any>;
  separator?: string | React.ComponentType<any>;
  containerClasses?: string;
  listItemClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  maxVisibleItems?: number;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  homeElement = HomeIcon,
  separator = SlashIcon,
  containerClasses = `${styles.cFlex} ${styles.cPadding} ${styles.cColor} ${styles.cText}`,
  listItemClasses = `${styles.cHover} ${styles.cMargin} ${styles.cFontWeight} ${styles.cText}`,
  activeClasses = `${styles.cFontWeight} ${styles.cListColor}`,
  capitalizeLinks = true,
  maxVisibleItems = 5,
}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const [showAll, setShowAll] = useState(false);

  const handleDropdownToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="">
      <div className={containerClasses}>
        <div className={listItemClasses}>
          <Link href={"/"}>
            {typeof homeElement === "string" ? (
              homeElement
            ) : (
              <HomeIcon
                className={`${styles.cHomeIcon} ${styles.cHoverHome}`}
              />
            )}
          </Link>
        </div>

        {/* Conditionally render the slash only if there are pathNames or homeElement is not empty */}
        {pathNames.length > 0 && homeElement && (
          <span className={styles.cMargin}>
            {typeof separator === "string" ? (
              <span className={styles.cFontWeight}> {separator} </span>
            ) : (
              <SlashIcon className={styles.cIcon} />
            )}
          </span>
        )}

        {pathNames.length > 0 && (
          <>
            {pathNames.length > maxVisibleItems && !showAll ? (
              <>
                {pathNames.slice(0, 1).map((link, index) => {
                  let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                  let itemClasses =
                    paths === href
                      ? `${listItemClasses} ${activeClasses}`
                      : listItemClasses;
                  let itemLink = capitalizeLinks
                    ? link[0].toUpperCase() + link.slice(1, link.length)
                    : link;

                  return (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <span className={styles.cMargin}>
                          {typeof separator === "string" ? (
                            <span className={styles.cFontWeight}>
                              {" "}
                              {separator}{" "}
                            </span>
                          ) : (
                            <SlashIcon className={styles.cIcon} />
                          )}
                        </span>
                      )}
                      <div className={itemClasses}>
                        <Link href={href}>{decodeURIComponent(itemLink)}</Link>
                      </div>
                    </React.Fragment>
                  );
                })}

                <span className={styles.cMargin}>
                  {typeof separator === "string" ? (
                    <span className={styles.fontWeight}> {separator} </span>
                  ) : (
                    <SlashIcon className={styles.cIcon} />
                  )}
                </span>
                <div className={listItemClasses}>
                  <span
                    className={styles.cCursor}
                    onClick={handleDropdownToggle}
                  >
                    ...
                  </span>
                </div>

                <span className={styles.cMargin}>
                  {typeof separator === "string" ? (
                    <span className={styles.cFontWeight}> {separator} </span>
                  ) : (
                    <SlashIcon className={styles.cIcon} />
                  )}
                </span>
                {pathNames.slice(-1).map((link, index) => {
                  let href = `/${pathNames
                    .slice(0, pathNames.length - index)
                    .join("/")}`;
                  let itemClasses =
                    paths === href
                      ? `${listItemClasses} ${activeClasses}`
                      : listItemClasses;
                  let itemLink = capitalizeLinks
                    ? link[0].toUpperCase() + link.slice(1, link.length)
                    : link;

                  return (
                    <React.Fragment key={index}>
                      <div className={itemClasses}>
                        <Link href={href}>{decodeURIComponent(itemLink)}</Link>
                      </div>
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              pathNames.map((link, index) => {
                let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                let itemClasses =
                  paths === href
                    ? `${listItemClasses} ${activeClasses}`
                    : listItemClasses;
                let itemLink = capitalizeLinks
                  ? link[0].toUpperCase() + link.slice(1, link.length)
                  : link;

                return (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <span className={styles.cMargin}>
                        {typeof separator === "string" ? (
                          <span className={styles.cFontWeight}>
                            {" "}
                            {separator}{" "}
                          </span>
                        ) : (
                          <SlashIcon className={styles.cIcon} />
                        )}
                      </span>
                    )}
                    <div className={itemClasses}>
                      <Link href={href}>{decodeURIComponent(itemLink)}</Link>
                    </div>
                  </React.Fragment>
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
