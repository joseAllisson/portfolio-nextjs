import { LoadingLinearProgress } from ".";
import { renderTheme } from "../../test/renderTheme";

describe("<LoadingLinearProgress />", () => {
  it("should render component", () => {
    const { container } = renderTheme(<LoadingLinearProgress />);

    const loadingLinearProgress = container.querySelector("#linear-progress");
    expect(loadingLinearProgress).toBeInTheDocument();
  });
});
