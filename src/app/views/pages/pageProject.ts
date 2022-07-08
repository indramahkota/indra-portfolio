import { InProjectModel } from "@in/data/models";
import { CommonElement } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import AppConfig from "src/data/myConfig";

@customElement("page-project")
export class ProjectPage extends CommonElement {
  renderProjectCard(data: InProjectModel): TemplateResult {
    return html`
      <div class="col-sm-6 col-lg-4 px-2">
        <in-project-card
          title=${data.title}
          description=${data.description}
        ></in-project-card>
      </div>
    `;
  }

  render() {
    return html`
      <div class="container-fluid mx-lg-auto width-default">
        <div class="row g-3">
          ${AppConfig.APP_PROJECTS.map((item) => this.renderProjectCard(item))}
        </div>
      </div>
    `;
  }
}
