/* Advanced Options section — standalone, framework-free.
   Markup and class names mirror the live /v2 page so styles.css applies unchanged. */
(function () {
  'use strict';

  /* ---------- icons ---------- */
  var CHECK =
    '<svg class="switch-check" width="12" height="12" viewBox="0 0 12 12"><path d="M2.4 6.2 4.7 8.5 9.6 3.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  var CHEV_UP =
    '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"__STYLE__><path d="M2 6.5 5 3.5 8 6.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg>';
  var CHEV_DOWN = '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg>';
  var MAIL =
    'data:image/svg+xml,' +
    encodeURIComponent(
      "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14.3335 12.0001L9.90492 8.00008M6.0954 8.00008L1.66685 12.0001M1.3335 4.66675L6.77678 8.47704C7.21756 8.78559 7.43795 8.93986 7.67767 8.99962C7.88943 9.0524 8.1109 9.0524 8.32265 8.99962C8.56238 8.93986 8.78277 8.78559 9.22355 8.47704L14.6668 4.66675M4.5335 13.3334H11.4668C12.5869 13.3334 13.147 13.3334 13.5748 13.1154C13.9511 12.9237 14.2571 12.6177 14.4488 12.2414C14.6668 11.8136 14.6668 11.2535 14.6668 10.1334V5.86675C14.6668 4.74664 14.6668 4.18659 14.4488 3.75877C14.2571 3.38244 13.9511 3.07648 13.5748 2.88474C13.147 2.66675 12.5869 2.66675 11.4668 2.66675H4.5335C3.41339 2.66675 2.85334 2.66675 2.42552 2.88474C2.04919 3.07648 1.74323 3.38244 1.55148 3.75877C1.3335 4.18659 1.3335 4.74664 1.3335 5.86675V10.1334C1.3335 11.2535 1.3335 11.8136 1.55148 12.2414C1.74323 12.6177 2.04919 12.9237 2.42552 13.1154C2.85334 13.3334 3.41339 13.3334 4.5335 13.3334Z' stroke='#2563EB' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>"
    );
  var STARS =
    'data:image/svg+xml,' +
    encodeURIComponent(
      "<svg preserveAspectRatio='none' overflow='visible' style='display: block;' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 14.6667V11.3333M3 4.66667V1.33333M1.33333 3H4.66667M1.33333 13H4.66667M8.66667 2L7.51055 5.00591C7.32254 5.49473 7.22854 5.73914 7.08235 5.94472C6.95279 6.12693 6.7936 6.28613 6.61139 6.41569C6.40581 6.56187 6.16139 6.65587 5.67257 6.84388L2.66667 8L5.67258 9.15612C6.1614 9.34413 6.40581 9.43813 6.61139 9.58431C6.7936 9.71387 6.95279 9.87307 7.08235 10.0553C7.22854 10.2609 7.32254 10.5053 7.51055 10.9941L8.66667 14L9.82279 10.9941C10.0108 10.5053 10.1048 10.2609 10.251 10.0553C10.3805 9.87307 10.5397 9.71387 10.7219 9.58431C10.9275 9.43813 11.1719 9.34413 11.6608 9.15612L14.6667 8L11.6608 6.84388C11.1719 6.65587 10.9275 6.56187 10.7219 6.41569C10.5397 6.28613 10.3805 6.12693 10.251 5.94472C10.1048 5.73914 10.0108 5.49473 9.82279 5.00591L8.66667 2Z' stroke='#8B5CF6' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>"
    );
  var CAL =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13.3333 6.66667H2.66667M10.6667 1.33333V4M5.33333 1.33333V4M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5746C14 13.1468 14 12.5868 14 11.4667V5.86667C14 4.74656 14 4.18651 13.782 3.75869C13.5903 3.38236 13.2843 3.0764 12.908 2.88465C12.4802 2.66667 11.9201 2.66667 10.8 2.66667H5.2C4.0799 2.66667 3.51984 2.66667 3.09202 2.88465C2.71569 3.0764 2.40973 3.38236 2.21799 3.75869C2 4.18651 2 4.74656 2 5.86667V11.4667C2 12.5868 2 13.1468 2.21799 13.5746C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ARROW =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CLOSE =
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  var TICK =
    '<svg class="tick" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- tooltip copy ---------- */
  var TIPS = {
    'camera-monitoring': "Monitors the candidate's camera feed to detect additional people or unusual activity in their surroundings.",
    'auto-terminate-camera': "Ends the exam automatically if a camera violation isn't cleared within 30 seconds.",
    'audio-monitoring': "Monitors the candidate's microphone for external noise or disturbance.",
    'screen-monitoring': "Records the candidate's screen throughout the exam and flags suspicious activity for review.",
    'face-verification': "Verifies the candidate's face at intervals throughout the exam to prevent impersonation.",
    'electronic-device-detection': 'Detects and logs electronic devices such as phones, tablets, secondary screens, or laptops visible during the exam.',
    'auto-terminate-on-violations': "Ends the exam automatically once a candidate's violations cross the configured warning threshold.",
    'tab-monitoring': 'Monitors tab and window activity and raises a violation each time the candidate leaves the exam window.',
    'warnings-before-termination': 'Sets how many times a candidate can leave the exam window before the exam is automatically terminated.',
    'attempt-on-mobile': 'Assessments can be attempted on mobile, but proctoring features are unavailable. Coding exams are not supported.',
    'secure-browser': "Runs the exam inside Topin's secure browser, locking down the device to prevent access to other applications or tabs.",
    'exam-pin': 'Requires candidates to enter a PIN before starting the exam.',
    'ip-restriction': 'Restrict exam access to up to 5 IP addresses so attempts happen only from approved networks.',
    'pin-type:Assessment-Specific PIN': 'Generates a unique PIN for this assessment only.',
    'pin-type:Common Start PIN': 'Uses one shared PIN across all assessments in your organization.',
    'pin-rotation': 'Refreshes the PIN automatically at the interval you set.',
    'presence-check': 'Requires candidates to re-enter the PIN every 30 minutes during the exam to confirm continued presence.',
    'invitation-email': "Sends an invitation email to candidates as soon as they're invited.",
    'reminder-email': 'Sends a reminder email to invited candidates 1 hour before the exam starts.',
    'pre-exam-form': 'Displays a form to candidates before they begin the exam.',
    'shortlisting-criteria:No Criteria': 'All candidates who attempt the assessment pass, regardless of score.',
    'shortlisting-criteria:Passing Marks': 'Set a minimum passing score. Candidates scoring above it are shortlisted; others are rejected.',
    'shortlisting-criteria:Top Candidates': 'Set the number of top-performing candidates to shortlist; others are rejected.',
    'submission-report:No Review': 'Candidates cannot view a submission report.',
    'submission-report:After Attempt': 'Candidates can review immediately after they finish the exam.',
    'submission-report:After Exam Ends': 'Candidates can review only during the date and time window you set.',
    'stats-visibility:Private': 'Keeps candidate statistics visible only within your organization.',
    'stats-visibility:Public': "Allows other organizations on the platform to view this assessment's candidate statistics.",
    'allow-multiple-submissions': 'Lets candidates resubmit their answer for an MCQ question more than once.',
    'scientific-calculator': 'Lets candidates use an on-screen scientific calculator in MCQ and Textual sections.',
    'show-datetime-timer': 'Affects visibility of assessment date time and timer on the header & home page',
    'peer-similarity': "Compares a candidate's code with other candidates' submissions and flags similar or matching code.\nSimilarity is a signal for review, not proof of malpractice.",
    'ai-code-check': 'Flags code that may be AI-generated, for C++, Java, and Python questions. This is a signal for review, not proof of malpractice.',
    'integrity-report': "Generates a report analyzing proctoring signals and the candidate's attempt, to support integrity review.",
    'event-triggers': 'Emits events to connected external platforms when key actions occur during the assessment.'
  };

  /* ---------- state ---------- */
  var state = {
    tab: 'tab-proctoring',
    collapsed: false,
    template: 'Standard',
    on: {
      'proctoring-enabled': true,
      'camera-monitoring': true, 'auto-terminate-camera': false, 'audio-monitoring': true,
      'screen-monitoring': true, 'face-verification': true, 'electronic-device-detection': false,
      'auto-terminate-on-violations': true, 'tab-monitoring': true, 'attempt-on-mobile': false,
      'secure-browser': false, 'exam-pin': false, 'presence-check': false, 'ip-restriction': false,
      'invitation-email': true, 'reminder-email': true, 'pre-exam-form': false,
      'allow-multiple-submissions': true, 'scientific-calculator': false, 'whatsapp-support': false,
      'show-datetime-timer': true, 'peer-similarity': false, 'ai-code-check': false, 'integrity-report': false
    },
    warnings: 5,
    pinType: 'Assessment-Specific PIN',
    pinRotation: '2 min',
    ips: [],
    ipDraft: '',
    ipError: '',
    shortlist: 'No Criteria',
    passingMark: 5,
    topCandidates: 5,
    report: 'No Review',
    reviewStart: '',
    reviewEnd: '',
    stats: 'Private',
    formLink: '',
    invWhen: 'immediately',
    invDateTime: '',
    remHours: 0,
    remMinutes: 5,
    saved: { invWhen: 'immediately', invDateTime: '', remHours: 0, remMinutes: 5 },
    events: { start: false, end: false },
    services: [],
    menuOpen: false
  };

  var PRESETS = {
    Standard: {
      on: { 'camera-monitoring': true, 'auto-terminate-camera': false, 'audio-monitoring': true, 'screen-monitoring': true, 'face-verification': true, 'electronic-device-detection': false, 'auto-terminate-on-violations': true, 'tab-monitoring': true, 'attempt-on-mobile': false, 'secure-browser': false, 'exam-pin': false, 'presence-check': false, 'ip-restriction': false },
      warnings: 5
    },
    Shield: {
      on: { 'camera-monitoring': true, 'auto-terminate-camera': false, 'audio-monitoring': true, 'screen-monitoring': true, 'face-verification': true, 'electronic-device-detection': false, 'auto-terminate-on-violations': true, 'tab-monitoring': true, 'attempt-on-mobile': false, 'secure-browser': false, 'exam-pin': true, 'presence-check': false, 'ip-restriction': false },
      warnings: 3
    },
    Practice: {
      on: { 'camera-monitoring': false, 'auto-terminate-camera': false, 'audio-monitoring': false, 'screen-monitoring': true, 'face-verification': false, 'electronic-device-detection': false, 'auto-terminate-on-violations': false, 'tab-monitoring': false, 'attempt-on-mobile': false, 'secure-browser': false, 'exam-pin': false, 'presence-check': false, 'ip-restriction': false },
      warnings: 5
    }
  };

  var TABS = [
    ['tab-proctoring', 'Proctoring'],
    ['tab-comms', 'Communications'],
    ['tab-results', 'Results & Review'],
    ['tab-candidate', 'Candidate Experience'],
    ['tab-reporting', 'Reporting & Analytics']
  ];

  var HEADERS = {
    'tab-proctoring': ['Proctoring', 'Choose how the exam is accessed, secured, and monitored. Pick a template or customize each setting.'],
    'tab-comms': ['Communications', 'Choose emails and feedback settings for the exam.'],
    'tab-results': ['Results & Review', 'Choose how candidates are shortlisted and what performance details they can see afterward.'],
    'tab-candidate': ['Candidate Experience', 'Choose what candidates can see or reach on their exam screen, like on-screen tools, and the support options.'],
    'tab-reporting': ['Reporting & Analytics', 'Choose integrity checks, reports, and insights shown to reviewers.']
  };

  Object.keys(HEADERS).forEach(function (k) { TIPS['header:' + k] = HEADERS[k][1]; });

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // Stand-in for the exam start date from Assessment Details: next full hour at least 30 min away.
  var EXAM_START = (function () {
    var d = new Date(Date.now() + 30 * 60000);
    d.setMinutes(0, 0, 0); d.setHours(d.getHours() + 1);
    return d.getTime();
  })();
  function fmt(ms) {
    var d = new Date(ms);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' +
      d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }
  // "25th Nov 2026, 1:55 PM"
  function fmtShort(ms) {
    var d = new Date(ms), n = d.getDate();
    var suffix = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th');
    return n + suffix + ' ' + d.toLocaleDateString('en-GB', { month: 'short' }) + ' ' + d.getFullYear() + ', ' +
      d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }
  function localNowValue() {
    var d = new Date(), p = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + 'T' + p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function invError() {
    if (state.invWhen === 'schedule' && state.invDateTime && new Date(state.invDateTime).getTime() <= Date.now()) {
      return 'Invitation time must be in the future.';
    }
    return '';
  }
  function remTotal() { return state.remHours * 60 + state.remMinutes; }
  function normalizeReminder() {
    if (remTotal() < 5) state.remMinutes = 5;
  }
  function invDirty() { return state.invWhen !== state.saved.invWhen || state.invDateTime !== state.saved.invDateTime; }
  function dirtyNames() {
    var names = [];
    if (state.on['invitation-email'] && invDirty()) names.push('Invitation Email');
    if (state.on['reminder-email'] && remDirty()) names.push('Reminder Email');
    return names;
  }
  var flashTimer = null;
  function remDirty() { return state.remHours !== state.saved.remHours || state.remMinutes !== state.saved.remMinutes; }
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function info(key, name, always) {
    var tip = TIPS[key];
    if (!tip) return '';
    return (
      '<span class="info-wrap' + (always ? ' always-show' : '') + '" data-tooltip-root>' +
      '<button type="button" class="info-btn" data-tip="' + esc(key) + '" aria-label="More information about ' + esc(name) +
      '" aria-expanded="false"><span class="info-mark" aria-hidden="true"></span></button></span>'
    );
  }

  function sw(key) {
    var on = !!state.on[key];
    return (
      '<span class="switch"><input id="control-' + key + '" data-switch="' + key + '" role="switch" aria-checked="' + on + '" type="checkbox"' +
      (on ? ' checked' : '') + '><span class="switch-ui" aria-hidden="true"><span class="knob">' + CHECK + '</span></span></span>'
    );
  }

  function labelLine(key, name, extra) {
    return (
      '<span class="label-line"><label for="control-' + key + '" id="label-' + key + '" class="setting-label">' + esc(name) + (extra || '') + '</label></span>' +
      info(key, name)
    );
  }

  function toggleRow(key, name, opts) {
    opts = opts || {};
    var pill = opts.pill ? '<span class="pill pill-new">' + opts.pill + '</span>' : '';
    var lead =
      '<span class="label-line"><label for="control-' + key + '" id="label-' + key + '" class="setting-label">' + esc(name) +
      (opts.ai ? '<span class="ai-badge" aria-hidden="true"><img width="16" height="16" alt="" src="' + STARS + '">AI</span>' : '') +
      '</label>' + pill + '</span>' + info(key, name);
    return (
      '<div class="row" data-setting="' + key + '"><div class="lead">' + lead + '</div><div class="controls">' + sw(key) + '</div></div>'
    );
  }

  function nestedToggle(key, name) {
    return (
      '<div><div class="nested-row depth-1" data-setting="' + key + '"><div class="lead">' + labelLine(key, name) +
      '</div><div class="controls">' + sw(key) + '</div></div></div>'
    );
  }

  function block(inner) {
    return '<div class="block">' + inner + '</div>';
  }

  function stepper(id, label, value, min, max, suffix) {
    return (
      '<span class="stepper-wrap"><span class="stepper"><input id="control-' + id + '" data-stepper="' + id + '" data-min="' + min + '" data-max="' + max +
      '" inputmode="numeric" aria-label="' + esc(label) + '" aria-valuemin="' + min + '" aria-valuemax="' + max + '" aria-valuenow="' + value + '" value="' + value + '">' +
      '<span class="stepper-spin"><button type="button" data-step="' + id + '" data-dir="1"' + (value >= max ? ' disabled' : '') + ' aria-label="Increase ' + esc(label) + '">' + CHEV_UP.replace('__STYLE__', '') + '</button>' +
      '<button type="button" data-step="' + id + '" data-dir="-1"' + (value <= min ? ' disabled' : '') + ' aria-label="Decrease ' + esc(label) + '">' + CHEV_UP.replace('__STYLE__', ' style="transform: rotate(180deg);"') + '</button></span></span>' +
      (suffix ? '<span class="suffix">' + suffix + '</span>' : '') + '</span>'
    );
  }

  function radioGroup(setting, name, label, options, current) {
    var items = options.map(function (o) {
      var key = setting + ':' + o;
      return (
        '<span class="choice-with-tip"><label class="choice"><input type="radio" data-radio="' + setting + '" value="' + esc(o) + '" name="' + setting + '"' +
        (o === current ? ' checked' : '') + '><span>' + esc(o) + '</span></label>' + info(key, o, true) + '</span>'
      );
    }).join('');
    return (
      '<div class="row" data-setting="' + setting + '"><div class="lead"><span class="label-line"><span id="label-' + setting + '" class="setting-label group-label">' +
      esc(label) + '</span></span></div><div class="controls"><div class="radios" role="radiogroup" aria-labelledby="label-' + setting + '">' + items + '</div></div></div>'
    );
  }

  function dateField(attr, label, val, invalid) {
    var shown = val ? fmt(new Date(val).getTime()) : '';
    return (
      '<label class="date-field' + (val ? ' has-value' : '') + (invalid ? ' is-invalid' : '') + '">' + CAL +
      (val ? '<span class="date-value">' + esc(shown) + '</span>' : '<span class="date-placeholder">Select Date &amp; Time</span>') +
      '<input ' + attr + ' aria-label="' + label + '" type="datetime-local" value="' + esc(val) + '"></label>'
    );
  }

  /* ---------- panels ---------- */
  function proctoring() {
    var o = state.on;
    var tpl = [['Standard', 'Standard', 'Balanced security for exams'], ['Shield', 'Secure', 'Maximum security for exams'], ['Practice', 'Practice', 'Light checks for low-stakes runs']]
      .map(function (t) {
        return (
          '<button type="button" class="template" data-template="' + t[0] + '" aria-pressed="' + (state.template === t[0]) + '" aria-label="' + t[1] + ', ' + t[2] + '">' +
          '<span class="template-title">' + t[1] + '</span><span class="template-sub">' + t[2] + '</span></button>'
        );
      }).join('');

    var h = '<div class="templates" role="group" aria-label="Proctoring templates">' + tpl + '</div><div class="settings">';

    h += block(toggleRow('camera-monitoring', 'Camera Monitoring') + (o['camera-monitoring'] ? nestedToggle('auto-terminate-camera', 'Auto-Terminate on Camera Violations') : ''));
    h += block(toggleRow('audio-monitoring', 'Audio Monitoring'));
    h += block(toggleRow('screen-monitoring', 'Screen Monitoring'));
    h += block(toggleRow('face-verification', 'Face Verification'));
    h += block(toggleRow('electronic-device-detection', 'Electronic Device Detection'));
    h += block(toggleRow('auto-terminate-on-violations', 'Auto-Terminate on Violations'));

    var warn =
      '<div><div class="nested-row depth-1" data-setting="warnings-before-termination"><div class="lead">' +
      '<span class="label-line"><label for="control-warnings-before-termination" id="label-warnings-before-termination" class="setting-label">Warnings Before Termination</label></span>' +
      info('warnings-before-termination', 'Warnings Before Termination') + '</div><div class="controls">' +
      stepper('warnings-before-termination', 'Warnings Before Termination', state.warnings, 1, 99) + '</div></div></div>';
    h += block(toggleRow('tab-monitoring', 'Tab & Window Switch Monitoring') + (o['tab-monitoring'] ? warn : ''));

    h += block(toggleRow('attempt-on-mobile', 'Attempt on Mobile'));
    h += block(toggleRow('secure-browser', 'Secure Browser Exam'));

    var pin = '';
    if (o['exam-pin']) {
      var typeRadios = ['Assessment-Specific PIN', 'Common Start PIN'].map(function (v) {
        return (
          '<span class="choice-with-tip"><label class="choice"><input type="radio" data-radio="pin-type" value="' + v + '" name="pin-type"' + (state.pinType === v ? ' checked' : '') +
          '><span>' + v + '</span></label>' + info('pin-type:' + v, v, true) + '</span>'
        );
      }).join('');
      var seg = ['30 sec', '1 min', '2 min', '4 min'].map(function (v) {
        return '<button type="button" role="radio" data-rotation="' + v + '" aria-checked="' + (state.pinRotation === v) + '">' + v + '</button>';
      }).join('');
      pin =
        '<div><div class="nested-row depth-1" data-setting="pin-type"><div class="lead"><span class="label-line"><span id="label-pin-type" class="setting-label group-label">PIN Type</span></span></div>' +
        '<div class="controls"><div class="radios" role="radiogroup" aria-labelledby="label-pin-type">' + typeRadios + '</div></div></div></div>' +
        '<div><div class="nested-row depth-1" data-setting="pin-rotation"><div class="lead"><span class="label-line"><span id="label-pin-rotation" class="setting-label">PIN Rotation Interval</span></span>' +
        info('pin-rotation', 'PIN Rotation Interval') + '</div><div class="controls"><div class="segments" role="radiogroup" aria-labelledby="label-pin-rotation">' + seg + '</div></div></div></div>' +
        nestedToggle('presence-check', 'Presence Check');
    }
    h += block(toggleRow('exam-pin', 'Exam PIN') + pin);

    var ip = '';
    if (o['ip-restriction']) {
      var full = state.ips.length >= 5;
      var chips = state.ips.map(function (a, i) {
        return '<li class="ip-chip"><span>' + esc(a) + '</span><button type="button" data-ip-remove="' + i + '" aria-label="Remove ' + esc(a) + '">' + CLOSE + '</button></li>';
      }).join('');
      ip =
        '<div><div class="nested-row depth-1 bare" data-setting="ip-addresses"><div class="ip-editor"><div class="ip-entry"><div class="ip-field' + (state.ipError ? ' is-invalid' : '') + '">' +
        '<input id="control-ip-addresses" class="text-input" placeholder="Add IP Address..." aria-label="Allowed IP Addresses" autocomplete="off" spellcheck="false" type="text" value="' + esc(state.ipDraft) + '"' + (full ? ' disabled' : '') + '>' +
        (state.ipDraft ? '<button type="button" class="ip-clear" data-ip-clear aria-label="Clear">' + CLOSE + '</button>' : '') +
        (state.ipError ? '<p class="ip-error">' + esc(state.ipError) + '</p>' : '') + '</div>' +
        '<button type="button" class="ip-add" data-ip-add' + (!state.ipDraft.trim() || full ? ' disabled' : '') + '>Add</button></div>' +
        (chips ? '<ul class="ip-chips">' + chips + '</ul>' : '') + '</div></div></div>';
    }
    h += block(toggleRow('ip-restriction', 'IP Address Restriction') + ip);
    return h + '</div>';
  }

  function comms() {
    var o = state.on;
    var err = invError();

    function actions(which, text) {
      return '<div><div class="nested-row depth-1 bare action-row" data-setting="actions-' + which + '"><div class="action-group">' +
        '<button type="button" class="ghost-btn"><img class="asset-icon" width="16" height="16" alt="" src="' + MAIL + '">' + text + '</button>' +
        '</div></div></div>';
    }

    /* Invitation email */
    var inv = '';
    if (o['invitation-email']) {
      var when = [['immediately', 'Send immediately'], ['schedule', 'Schedule for date & time']].map(function (w) {
        return '<label class="choice"><input type="radio" data-radio="inv-when" value="' + w[0] + '" name="inv-when"' + (state.invWhen === w[0] ? ' checked' : '') + '><span>' + w[1] + '</span></label>';
      }).join('');
      inv += '<div><div class="nested-row depth-1" data-setting="inv-when"><div class="lead"><span class="label-line"><span id="label-inv-when" class="setting-label group-label">When to send</span></span></div>' +
        '<div class="controls"><div class="radios" role="radiogroup" aria-labelledby="label-inv-when">' + when + '</div></div></div></div>';
      if (state.invWhen === 'schedule') {
        inv += '<div><div class="nested-row depth-1 date-row" data-setting="inv-datetime"><div class="lead"><span class="label-line"><span class="setting-label">Invitation date &amp; time</span></span></div>' +
          '<div class="controls"><div class="field-col">' + dateField('id="control-inv-datetime" data-inv-date min="' + localNowValue() + '"', 'Invitation date and time', state.invDateTime, !!err) +
          (err ? '<p class="field-error" role="alert">' + err + '</p>' : '') + '</div></div></div></div>';
      }
      inv += actions('inv', 'View Invitation Mail');
    }

    /* Reminder email */
    var rem = '';
    if (o['reminder-email']) {
      var minMin = state.remHours === 0 ? 5 : 0;
      function seg(id, label, val, min, max, unit) {
        return '<label class="duration-seg"><input id="control-' + id + '" data-stepper="' + id + '" data-min="' + min + '" data-max="' + max + '" inputmode="numeric" pattern="[0-9]*" maxlength="2" spellcheck="false" autocomplete="off" aria-label="' + label +
          '" aria-valuemin="' + min + '" aria-valuemax="' + max + '" aria-valuenow="' + val + '" value="' + val + '"><span>' + unit + '</span></label>';
      }
      rem += '<div><div class="nested-row depth-1" data-setting="reminder-offset"><div class="lead"><span class="label-line"><span class="setting-label">Send reminder before exam start</span></span></div>' +
        '<div class="controls"><div class="time-col"><p class="helper-text">Sends at ' + fmtShort(EXAM_START - remTotal() * 60000) + '</p>' +
        '<div class="duration" role="group" aria-label="Send reminder before exam start">' +
        seg('reminder-hours', 'Reminder hours', state.remHours, 0, 72, 'hr') + '<span class="duration-sep" aria-hidden="true"></span>' +
        seg('reminder-minutes', 'Reminder minutes', state.remMinutes, minMin, 59, 'min') + '</div></div></div></div></div>';
      rem += actions('rem', 'View Reminder Mail');
    }

    var link =
      '<div><div class="nested-row depth-1 bare form-row" data-setting="pre-exam-form-link"><div class="form-link' + (state.formLink ? ' has-value' : '') + '"><label class="link-field">' +
      '<input id="control-pre-exam-form-link" inputmode="url" placeholder="Add Form Link" aria-label="Form Link" autocomplete="off" spellcheck="false" type="text" value="' + esc(state.formLink) + '"></label></div></div></div>';

    var h = '<div class="settings">';
    h += block(toggleRow('invitation-email', 'Invitation Email') + inv);
    h += block(toggleRow('reminder-email', 'Reminder Email') + rem);
    h += block(toggleRow('pre-exam-form', 'Pre Exam Form') + (o['pre-exam-form'] ? link : ''));
    h += '</div>';

    // one shared action for both emails: shown only when something changed
    var invOn = !!o['invitation-email'], remOn = !!o['reminder-email'];
    var dirty = (invOn && invDirty()) || (remOn && remDirty());
    var valid = !(invOn && (err || (state.invWhen === 'schedule' && !state.invDateTime)));
    if (dirty) {
      h += '<div class="panel-actions"><p class="unsaved-note">Unsaved changes in ' + dirtyNames().join(' and ') + '</p>' +
        '<button type="button" class="primary-btn" data-update' + (valid ? '' : ' disabled') + '>Update Email Settings</button></div>';
    } else if (state.flash) {
      h += '<div class="panel-actions is-success" role="status" aria-live="polite"><p class="saved-note">' +
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="currentColor"/><path d="M5 8.2 7 10.2 11 6" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        esc(state.flash) + '</p></div>';
    }
    return h;
  }

  function results() {
    var h = '<div class="settings">';
    var nested = '';
    if (state.shortlist === 'Passing Marks') {
      nested = '<div><div class="nested-row depth-1 bare field-row" data-setting="passing-mark"><div class="field-stepper"><span class="field-stepper-label">Enter Passing Mark</span>' +
        stepper('passing-mark', 'Enter Passing Mark', state.passingMark, 1, 75, '/75') + '</div></div></div>';
    } else if (state.shortlist === 'Top Candidates') {
      nested = '<div><div class="nested-row depth-1 bare field-row" data-setting="top-candidates"><div class="field-stepper"><span class="field-stepper-label">Number of Top Candidates</span>' +
        stepper('top-candidates', 'Number of Top Candidates', state.topCandidates, 1, 500) + '</div></div></div>';
    }
    h += block(radioGroup('shortlisting-criteria', '', 'Shortlisting Criteria', ['No Criteria', 'Passing Marks', 'Top Candidates'], state.shortlist) + nested);

    var win = '';
    if (state.report === 'After Exam Ends') {
      win =
        '<div><div class="nested-row depth-1 date-row" data-setting="review-window"><div class="lead"><span class="label-line"><span id="label-review-window" class="setting-label">Show Correct Answer During Review</span></span></div>' +
        '<div class="controls"><div class="date-range" role="group" aria-label="Show Correct Answer During Review">' +
        dateField('id="control-review-window" data-date="start"', 'Review window start', state.reviewStart) +
        '<span class="date-arrow" aria-hidden="true">' + ARROW + '</span>' +
        dateField('data-date="end"', 'Review window end', state.reviewEnd) + '</div></div></div></div>';
    }
    h += block(radioGroup('submission-report', '', 'Submission Report', ['No Review', 'After Attempt', 'After Exam Ends'], state.report) + win);
    h += block(radioGroup('stats-visibility', '', 'Candidate Statistics Visibility', ['Private', 'Public'], state.stats));
    return h + '</div>';
  }

  function candidate() {
    var h = '<div class="settings">';
    h += block(toggleRow('allow-multiple-submissions', 'Multiple Submissions'));
    h += block(toggleRow('scientific-calculator', 'Scientific Calculator', { pill: 'New' }));
    h += block(toggleRow('whatsapp-support', 'WhatsApp Support Option'));
    h += block(toggleRow('show-datetime-timer', 'Assessment Date, Time & Timer'));
    return h + '</div>';
  }

  function reporting() {
    var h = '<div class="settings">';
    h += block(toggleRow('peer-similarity', 'Peer Similarity Check'));
    h += block(toggleRow('ai-code-check', 'AI Generated Code Detection', { ai: true }));
    h += block(toggleRow('integrity-report', 'AI Integrity Report', { ai: true }));

    var any = state.events.start || state.events.end;
    var services = '';
    if (any) {
      var trig = state.services.length
        ? '<span class="chips">' + state.services.map(function (s) { return '<span class="chip">' + esc(s) + '</span>'; }).join('') + '</span>'
        : '<span class="placeholder">Select Services</span>';
      var list = '';
      if (state.menuOpen) {
        list = '<ul class="menu-list" role="listbox" aria-label="Services" aria-multiselectable="true">' +
          ['Learning Platform', 'Accounts'].map(function (s) {
            var sel = state.services.indexOf(s) > -1;
            return '<li><button type="button" class="menu-option" role="option" data-service="' + s + '" aria-selected="' + sel + '"><span>' + s + '</span>' + (sel ? TICK : '') + '</button></li>';
          }).join('') + '</ul>';
      }
      services =
        '<div><div class="nested-row depth-1 bare service-row" data-setting="event-services"><div class="menu service-menu"><button type="button" class="menu-trigger" data-menu aria-haspopup="listbox" aria-expanded="' +
        state.menuOpen + '" aria-label="Services">' + trig + CHEV_DOWN + '</button>' + list + '</div></div></div>';
    }
    h += block(
      '<div class="row" data-setting="event-triggers"><div class="lead"><span class="label-line"><span id="label-event-triggers" class="setting-label group-label">Event Triggers</span></span>' +
      info('event-triggers', 'Event Triggers') + '</div><div class="controls"><div class="checks" role="group" aria-labelledby="label-event-triggers">' +
      '<label class="choice"><input type="checkbox" data-event="start"' + (state.events.start ? ' checked' : '') + '><span>Send Attempt Start Event</span></label>' +
      '<label class="choice"><input type="checkbox" data-event="end"' + (state.events.end ? ' checked' : '') + '><span>Send Attempt End Event</span></label></div></div></div>' + services
    );
    return h + '</div>';
  }

  var PANELS = { 'tab-proctoring': proctoring, 'tab-comms': comms, 'tab-results': results, 'tab-candidate': candidate, 'tab-reporting': reporting };

  /* ---------- render ---------- */
  var app = document.getElementById('app');

  var lastTab = null;
  function render(keepFocusId) {
    var prevMain = app.querySelector('.main');
    var prevScroll = prevMain && lastTab === state.tab ? prevMain.scrollTop : 0;
    var head = HEADERS[state.tab];
    var nav = TABS.map(function (t) {
      var sel = state.tab === t[0];
      return '<button id="' + t[0] + '" type="button" role="tab" class="nav-btn" aria-selected="' + sel + '" aria-controls="advanced-panel" tabindex="' + (sel ? 0 : -1) + '">' + esc(t[1]) + '</button>';
    }).join('');

    var proc = state.tab === 'tab-proctoring';
    var titleLine = '<span class="title-line"><h2>' + esc(head[0]) + '</h2>' + info('header:' + state.tab, head[0], true) + '</span>';
    var header = proc
      ? '<header class="category-header has-toggle">' + titleLine + '<span class="switch"><input id="control-proctoring-enabled" data-switch="proctoring-enabled" role="switch" aria-label="Enable Proctoring" aria-checked="' +
        !!state.on['proctoring-enabled'] + '" type="checkbox"' + (state.on['proctoring-enabled'] ? ' checked' : '') + '><span class="switch-ui" aria-hidden="true"><span class="knob">' + CHECK + '</span></span></span></header>'
      : '<header class="category-header">' + titleLine + '</header>';
    var body = PANELS[state.tab]();
    if (proc && !state.on['proctoring-enabled']) body = '<div class="is-off" inert>' + body + '</div>';

    app.innerHTML =
      '<div class="card-bar' + (state.collapsed ? ' is-collapsed' : '') + '"><h1 class="section-title">Advanced Options</h1>' +
      '<button type="button" class="collapse-btn" data-collapse aria-expanded="' + !state.collapsed + '" aria-controls="advanced-form" aria-label="' + (state.collapsed ? 'Expand' : 'Collapse') + ' Advanced Options">' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"' + (state.collapsed ? ' style="transform:rotate(180deg)"' : '') + '><path d="M4 10l4-4 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>' +
      '<form id="advanced-form" class="shell is-row-hover" aria-label="Advanced options" onsubmit="return false"' + (state.collapsed ? ' hidden' : '') + '>' +
      '<aside class="side"><div class="nav" role="tablist" aria-orientation="vertical" aria-label="Advanced options">' + nav + '</div></aside>' +
      '<div class="main"><div id="advanced-panel" role="tabpanel" aria-labelledby="' + state.tab + '"><div class="panel-height-inner">' +
      header + body + '</div></div></div></form>';

    var main = app.querySelector('.main');
    if (main) main.scrollTop = prevScroll;
    lastTab = state.tab;
    if (typeof syncStuck === 'function') syncStuck();
    // open dropdowns upward when the panel has no room below
    if (main) app.querySelectorAll('.menu-list').forEach(function (list) {
      if (list.getBoundingClientRect().bottom > main.getBoundingClientRect().bottom - 4) list.classList.add('is-up');
    });

    if (keepFocusId) {
      var el = document.getElementById(keepFocusId);
      if (el) {
        el.focus({ preventScroll: true });
        if (el.setSelectionRange && el.type === 'text') { var n = el.value.length; el.setSelectionRange(n, n); }
      }
    }
  }

  /* tooltips are built straight in the DOM so hover never triggers a re-render */
  function hideTip() {
    var t = app.querySelector('.tooltip');
    if (t) {
      var btn = t.parentNode.querySelector('.info-btn');
      btn.setAttribute('aria-expanded', 'false');
      btn.removeAttribute('aria-describedby');
      t.remove();
    }
  }

  function showTip(btn) {
    var key = btn.dataset.tip;
    if (btn.getAttribute('aria-expanded') === 'true') return;
    hideTip();
    var tip = document.createElement('span');
    tip.className = 'tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.id = 'tip-' + slug(key);
    tip.setAttribute('data-placement', 'right');
    tip.innerHTML = esc(TIPS[key]).replace(/\n/g, '<br>');
    btn.parentNode.appendChild(tip);
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-describedby', tip.id);
    if (tip.getBoundingClientRect().right > window.innerWidth - 8) tip.setAttribute('data-placement', 'left');
  }

  /* ---------- behaviour ---------- */
  function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

  function stepperValue(id) {
    return { 'warnings-before-termination': 'warnings', 'passing-mark': 'passingMark', 'top-candidates': 'topCandidates', 'reminder-hours': 'remHours', 'reminder-minutes': 'remMinutes' }[id];
  }

  function applyPreset(name) {
    var p = PRESETS[name];
    state.template = name;
    Object.keys(p.on).forEach(function (k) { state.on[k] = p.on[k]; });
    state.warnings = p.warnings;
  }

  function isIPv4(s) {
    var m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(s);
    return !!m && m.slice(1).every(function (n) { return +n <= 255; });
  }

  function addIp() {
    var v = state.ipDraft.trim();
    if (!v) return;
    if (!isIPv4(v)) { state.ipError = 'Enter a valid IP address'; return; }
    if (state.ips.indexOf(v) > -1) { state.ipError = 'IP address already added'; return; }
    if (state.ips.length >= 5) { state.ipError = 'You can add up to 5 IP addresses'; return; }
    state.ips.push(v); state.ipDraft = ''; state.ipError = '';
  }

  app.addEventListener('click', function (e) {
    var t = e.target;
    var el;

    if (t.matches && t.matches('input[type=datetime-local]') && t.showPicker) {
      try { t.showPicker(); } catch (err) { /* already open or not allowed */ }
      return;
    }


    if ((el = t.closest('[data-update]'))) {
      if (el.disabled) return;
      var names = dirtyNames();
      state.saved = { invWhen: state.invWhen, invDateTime: state.invDateTime, remHours: state.remHours, remMinutes: state.remMinutes };
      state.flash = names.join(' and ') + ' settings updated';
      clearTimeout(flashTimer);
      flashTimer = setTimeout(function () { state.flash = null; if (state.tab === 'tab-comms') render(); }, 3000);
      return render();
    }
    if (t.closest('[data-collapse]')) { state.collapsed = !state.collapsed; hideTip(); return render('x-none'); }
    if ((el = t.closest('[role=tab]'))) { state.tab = el.id; state.menuOpen = false; return render(); }
    if ((el = t.closest('.template'))) { applyPreset(el.dataset.template); return render(); }

    if ((el = t.closest('.info-btn'))) { showTip(el); return; }

    if ((el = t.closest('[data-step]'))) {
      var id = el.dataset.step, input = document.getElementById('control-' + id);
      var v = clamp((parseInt(input.value, 10) || 0) + +el.dataset.dir, +input.dataset.min, +input.dataset.max);
      state[stepperValue(id)] = v; normalizeReminder();
      return render();
    }

    if ((el = t.closest('[data-rotation]'))) { state.pinRotation = el.dataset.rotation; return render(); }
    if ((el = t.closest('[data-ip-remove]'))) { state.ips.splice(+el.dataset.ipRemove, 1); return render(); }
    if (t.closest('[data-ip-add]')) { addIp(); return render('control-ip-addresses'); }
    if (t.closest('[data-ip-clear]')) { state.ipDraft = ''; state.ipError = ''; return render('control-ip-addresses'); }
    if (t.closest('[data-menu]')) { state.menuOpen = !state.menuOpen; return render(); }
    if ((el = t.closest('[data-service]'))) {
      var s = el.dataset.service, i = state.services.indexOf(s);
      if (i > -1) state.services.splice(i, 1); else state.services.push(s);
      return render();
    }

    if (state.menuOpen && !t.closest('.menu')) { state.menuOpen = false; render(); }
  });

  app.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset.switch) { state.on[t.dataset.switch] = t.checked; return render(t.id); }
    if (t.dataset.radio) {
      var m = { 'shortlisting-criteria': 'shortlist', 'submission-report': 'report', 'stats-visibility': 'stats', 'pin-type': 'pinType', 'inv-when': 'invWhen' };
      state[m[t.dataset.radio]] = t.value;
      return render();
    }
    if (t.dataset.event) { state.events[t.dataset.event] = t.checked; if (!state.events.start && !state.events.end) state.menuOpen = false; return render(); }
    if (t.dataset.stepper) {
      var v = clamp(parseInt(t.value, 10) || +t.dataset.min, +t.dataset.min, +t.dataset.max);
      state[stepperValue(t.dataset.stepper)] = v; normalizeReminder();
      return render(t.id);
    }
    if (t.dataset.invDate !== undefined) { state.invDateTime = t.value; return render(); }
    if (t.dataset.date) { state[t.dataset.date === 'start' ? 'reviewStart' : 'reviewEnd'] = t.value; return render(); }
  });

  app.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset && t.dataset.stepper) {
      var clean = t.value.replace(/\D/g, '').slice(0, String(t.dataset.max || '99').length);
      if (clean !== t.value) t.value = clean;
      return;
    }
    if (t.id === 'control-ip-addresses') {
      var hadText = !!state.ipDraft;
      state.ipDraft = t.value; state.ipError = '';
      if (hadText !== !!t.value || true) render('control-ip-addresses');
    } else if (t.id === 'control-pre-exam-form-link') {
      var had = !!state.formLink;
      state.formLink = t.value;
      t.closest('.form-link').classList.toggle('has-value', !!t.value);
    }
  });

  app.addEventListener('keydown', function (e) {
    var st = e.target.dataset && e.target.dataset.stepper;
    if (st && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      var inp = e.target;
      state[stepperValue(st)] = clamp((parseInt(inp.value, 10) || 0) + (e.key === 'ArrowUp' ? 1 : -1), +inp.dataset.min, +inp.dataset.max);
      normalizeReminder();
      return render(inp.id);
    }
    if (e.key === 'Enter' && e.target.id === 'control-ip-addresses') { e.preventDefault(); addIp(); render('control-ip-addresses'); }
    if (e.key === 'Escape') { hideTip(); if (state.menuOpen) { state.menuOpen = false; render(); } }
  });

  document.addEventListener('click', function (e) {
    if (e.composedPath().indexOf(app) === -1 && state.menuOpen) { state.menuOpen = false; render(); }
  });

  // divider under the pinned templates only once they are stuck
  function syncStuck() {
    var main = app.querySelector('.main'), tpl = app.querySelector('.templates');
    if (!main || !tpl) return;
    tpl.classList.toggle('is-stuck', main.scrollTop > 0 && tpl.getBoundingClientRect().top - main.getBoundingClientRect().top <= 1);
  }
  app.addEventListener('scroll', syncStuck, true);

  app.addEventListener('mouseover', function (e) {
    var b = e.target.closest && e.target.closest('.info-btn');
    if (b) showTip(b);
  });
  app.addEventListener('mouseout', function (e) {
    var w = e.target.closest && e.target.closest('.info-wrap');
    if (w && !w.contains(e.relatedTarget)) hideTip();
  });
  app.addEventListener('focusin', function (e) {
    var b = e.target.closest && e.target.closest('.info-btn');
    if (b) showTip(b);
  });
  app.addEventListener('focusout', function (e) {
    if (e.target.closest && e.target.closest('.info-btn')) hideTip();
  });

  render();
})();
