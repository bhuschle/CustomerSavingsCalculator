import { vzw } from "VZW.js";
import { tmo } from "TMO.js";
import { att } from "ATT.js";

function calculateCard() {
  // Previous Carrier Plan Cost
  let previous_price = 0;
  let selected = "";

  if (comp === "us") {
    previous_price = us_lines[line - 1];
    selected = "AT&T";
  } else if (comp === "uex") {
    previous_price = uex_lines[line - 1];
    selected = "AT&T";
  } else if (comp === "uel") {
    previous_price = ue_lines[line - 1];
    selected = "AT&T";
  } else if (comp === "su") {
    previous_price = su_lines[line - 1];
    selected = "Verizon";
  } else if (comp === "pmu") {
    previous_price = pmu_lines[line - 1];
    selected = "Verizon";
  } else if (comp === "dmu") {
    previous_price = dmu_lines[line - 1];
    selected = "Verizon";
  } else if (comp === "gmu") {
    previous_price = gmu_lines[line - 1];
    selected = "Verizon";
  } else if (comp === "jk") {
    previous_price = jk_lines[line - 1];
    selected = "Verizon";
  }
  if (ap.checked === false) {
    previous_price += 10 * line;
  }

  // T-Mobile Plan Price
  let plan_price = 0;
  // Total savings by switching to T-Mobile
  let plan_savings = 0;

  if (plan === "ff") {
    if (line > 2) {
      pn.innerHTML = "<h1>Plan has a 2 line maximum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = ff_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta 55</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "ffe") {
    if (line > 2) {
      pn.innerHTML = "<h1>Plan has a 2 line maximum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = ffe_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta 55 Essentials</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "ffp") {
    if (line > 2) {
      pn.innerHTML = "<h1>Plan has a 2 line maximum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = ffp_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta 55+</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "ess") {
    if (line > 6) {
      pn.innerHTML = "<h1>Plan has a 6 line maximum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = ess_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta Essentials</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "milfrp") {
    if (line < 2) {
      pn.innerHTML = "<h1>Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = milp_frp_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta Military / First Responder Plus</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "milfr") {
    if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = mil_fr_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta Military / First Responder</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "m") {
    if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = m_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = "<h1>Magenta</h1>";
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  } else if (plan === "mp") {
    if (line < 2 && selected === "VZW" && vzw_plan === "jk") {
      pn.innerHTML = "<h1>VZW Plan has a 2 line minimum<h1>";
      pp.innerHTML = `<h1>${line} lines selected<h1>`;
    } else {
      plan_price = mp_lines[line - 1];
      if (tap.checked === false) {
        plan_price += 5 * line;
      }
      plan_savings = previous_price - plan_price;
      pn.innerHTML = `<h1>Magenta +</h1>`;
      opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
      pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
      ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
    }
  }
}

document.getElementById("submit").addEventListener("click", calculateCard);
