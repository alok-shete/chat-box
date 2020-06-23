import React from "react";
import cx from "classnames";

const message = (prop) => {
  return (
    <div>
      {prop.name.toLowerCase() === prop.user.toLowerCase() ? (
        <div>
          <div className={cx("d-flex", "flex-row-reverse")}>
            {prop.name[0].toUpperCase() + prop.name.slice(1)}
          </div>
          <div className={cx("d-flex", "flex-row-reverse")}>
            <div
              className={cx(
                "alert",
                "alert-success",
                "alert-dismissible",
                "col-sm-10"
              )}
            >
              {prop.message}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <span>
            {prop.name[0].toLowerCase().toUpperCase() + prop.name.slice(1)}
          </span>
          <div className={cx("d-flex", "flex-row")}>
            <div className={cx("alert", "alert-primary", "col-sm-10")}>
              {prop.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default message;
