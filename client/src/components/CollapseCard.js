import React from "react";

const CollapseCard = props => (
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a
          data-toggle="collapse"
          href="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          CLICK ME!
        </a>
      </h5>
    </div>
    <div
      id="collapseOne"
      class="collapse"
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div class="card-body">{props.children}</div>
    </div>
  </div>
);

export default CollapseCard;
