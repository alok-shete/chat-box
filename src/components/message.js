import React from "react";
import cx from "classnames";

const message = (prop) => {
  return (
    <div>
      {prop.name.toLowerCase() === prop.user.toLowerCase() ? (
        <div>
          <div className={cx("d-flex", "flex-row-reverse")}>
            <div className="col-sm-8">
              <div className="text-right">
                {prop.name[0].toUpperCase() + prop.name.slice(1)}
                <br />
                <span className="font-italic">{prop.date}</span>
              </div>
            </div>
          </div>
          <div className={cx("d-flex", "flex-row-reverse")}>
            <div
              className={cx(
                "alert",
                "alert-success",
                "alert-dismissible",
                "col-sm-8"
              )}
            >
              {prop.message}
              <br />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <span>
            {prop.name[0].toLowerCase().toUpperCase() + prop.name.slice(1)}
            <br />
            <span className="font-italic">{prop.date}</span>
          </span>
          <div className={cx("d-flex", "flex-row")}>
            <div className={cx("alert", "alert-primary", "col-sm-8")}>
              {prop.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default message;

/*
 <div className={cx("d-flex", "flex-row-reverse")}>
            <s class="text-left">{prop.date}</p>
            {prop.name[0].toUpperCase() + prop.name.slice(1)}
          </div>
*/
