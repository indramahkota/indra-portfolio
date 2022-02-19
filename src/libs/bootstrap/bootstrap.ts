import * as bootstrap from "bootstrap";

export const initBootstrap = function (config: any) {
  // Enabling tooltips
  if (config.tooltip) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
};
