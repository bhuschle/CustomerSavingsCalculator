// get plan selected value
let plan = document.getElementById('tmo-plan').value;

// get line selected value
let line = document.getElementById('lines').value;
let ls = document.getElementById('line-select');

// get competitors plan select
let comp = document.getElementById('comp-plans').value;

// get TMO plan box elements
let planb = document.getElementById('plan-box');

// Autopay checkbox
let ap = document.getElementById('autopay-select');
let tap = document.getElementById('tmo-autopay-select');

// get plan information divs
let pn = document.getElementById('plan-name');
let pp = document.getElementById('plan-price');
let opp = document.getElementById('old-plan-price');
let ps = document.getElementById('plan-savings');
let pb = document.getElementById('plan-benefits');

// Set values for different plans

// -----------------------------------------------------------------------
// Verizon
// -----------------------------------------------------------------------

// Autopay discount for JustKids, Start Unlimited, Play More Unlimited, Do More Unlimited, Get More Unlimited
let vzw_auto_disc_0 = 10;

// Autopay discount for Above Unlimited, Beyond Unlimited, Go Unlimited, 5gb Single Phone
let vzw_auto_disc_1 = 5;

// Start Unlimited
// 5th line and above $30 per line
let su_lines = [70, 120, 135, 140, 150, 180, 210, 240, 270, 300, 330, 360];

// Play More Unlimited
// 5th line and above $40 per line
let pmu_lines = [80, 140, 165, 180, 200, 240, 280, 320, 360, 400, 440, 480];

// Do More Unlimited
// 5th line and above $40 per line
let dmu_lines = [80, 140, 165, 180, 200, 240, 280, 320, 360, 400, 440, 480];

// Get More Unlimited
// 5th line and above $50 per line
let gmu_lines = [90, 160, 195, 220, 250, 300, 350, 400, 450, 500, 550, 600];

// Just Kids
// 5th line and above $25 per line
let jk_lines = [-1, 100, 120, 140, 125, 150, 175, 200, 225, 250, 275, 300];


// -----------------------------------------------------------------------
// AT&T
// -----------------------------------------------------------------------

// Autopay discount on Unlimited Starter, Unlimited Extra, Unlimited Elite
let att_auto_disc = 10;

// Unlimited Elite
// 5th line and above $45 per line
let ue_lines = [85, 150, 180, 200, 225, 270, 315, 360, 405, 450, 495, 540];

// Unlimited Extra
// 5th line and above $35 per line
let uex_lines = [75, 130, 150, 160, 175, 210, 245, 280, 315, 360, 405, 450];

// Unlimited Starter
// 5th line and above $30 per line
let us_lines = [65, 120, 135, 140, 150, 180, 210, 240, 270, 300, 330, 360];

// 4gb plan
// 5th line and above $40 per line
let gb_lines = [50, 90, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480];

// -----------------------------------------------------------------------
// T-Mobile
// autopay discount for all t-mobile plans is $5 per line
// -----------------------------------------------------------------------

// autopay discount for T-Mobile plans
let tmo_auto_disc = 5;

// Plus up feature
let plus_up = 15;

// Essentials Plan
// 6 lines maximum
let ess_lines = [60, 90, 105, 120, 135, 150];

// Magenta Plan
let m_lines = [70, 120, 140, 160, 180, 200, 220, 240, 270, 300, 330, 360];

// Magenta Plus Plan
let mp_lines = [85, 140, 170, 200, 230, 260, 290, 320, 360, 400, 440, 480];

// Magenta Plus Unlimited 55 Plan
// 2 lines only
let ffp_lines = [-1, 90];

// Magenta Unlimited 55 plan
let ff_lines = [50, 70];

// Magenta Essentials 55 Plan
let ffe_lines = [40, 55];

// Military_First Responder Plan
let mil_fr_lines = [55, 80, 90, 100, 110, 120, 140, 170, 195, 220, 245, 270];

// Military_First Responder Plus Plan
// 2 or more lines only
let milp_frp_lines = [-1, 100, 120, 140, 160, 180, 210, 240, 275, 310, 345, 380];

function calculateCard() {
    plan = document.getElementById('tmo-plan').value;
    ap = document.getElementById('autopay-select');
    tap = document.getElementById('tmo-autopay-select');
    line = document.getElementById('lines').value;
    comp = document.getElementById('comp-plans').value;

    // Previous Carrier Plan Cost
    let previous_price = 0;
    let selected = "";

    if (comp === 'us') {
        previous_price = us_lines[line - 1];
        selected = "AT&T";
    } else if (comp === 'uex') {
        previous_price = uex_lines[line - 1];
        selected = "AT&T";
    } else if (comp === 'uel') {
        previous_price = ue_lines[line - 1];
        selected = "AT&T";
    } else if (comp === 'su') {
        previous_price = su_lines[line - 1];
        selected = "Verizon";
    } else if (comp === 'pmu') {
        previous_price = pmu_lines[line - 1];
        selected = "Verizon";
    } else if (comp === 'dmu') {
        previous_price = dmu_lines[line - 1];
        selected = "Verizon";
    } else if (comp === 'gmu') {
        previous_price = gmu_lines[line - 1];
        selected = "Verizon";
    } else if (comp === 'jk') {
        previous_price = jk_lines[line - 1];
        selected = "Verizon";
    }
    if (ap.checked === false) { previous_price += (10 * line); }

    // T-Mobile Plan Price
    let plan_price = 0;
    // Total savings by switching to T-Mobile
    let plan_savings = 0;



    if (plan === 'ff') {
        if (line > 2) {
            pn.innerHTML = '<h1>Plan has a 2 line maximum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = ff_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta 55</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'ffe') {
        if (line > 2) {
            pn.innerHTML = '<h1>Plan has a 2 line maximum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = ffe_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta 55 Essentials</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'ffp') {
        if (line > 2) {
            pn.innerHTML = '<h1>Plan has a 2 line maximum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = ffp_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta 55+</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'ess') {
        if (line > 6) {
            pn.innerHTML = '<h1>Plan has a 6 line maximum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = ess_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta Essentials</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'milfrp') {
        if (line < 2) {
            pn.innerHTML = '<h1>Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = milp_frp_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta Military / First Responder Plus</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'milfr') {
        if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = mil_fr_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta Military / First Responder</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'm') {
        if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = m_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = '<h1>Magenta</h1>';
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    } else if (plan === 'mp') {
        if (line < 2 && selected === 'VZW' && vzw_plan === 'jk') {
            pn.innerHTML = '<h1>VZW Plan has a 2 line minimum<h1>';
            pp.innerHTML = `<h1>${line} lines selected<h1>`;
        } else {
            plan_price = mp_lines[line - 1];
            if (tap.checked === false) { plan_price += (5 * line); }
            plan_savings = previous_price - plan_price;
            pn.innerHTML = `<h1>Magenta +</h1>`;
            opp.innerHTML = `<p>${selected} Cost : <strong>${previous_price}</strong> per month</p>`;
            pp.innerHTML = `<p>T-Mobile Cost : <strong>${plan_price}</strong> per month</p>`;
            ps.innerHTML = `<p>Savings : <strong>${plan_savings}</strong> per month</p>`;
        }
    }
}

document.getElementById('submit').addEventListener('click', calculateCard);