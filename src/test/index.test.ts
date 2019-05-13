import "jest";
jest.mock("capture-template");
import { captureImage } from "capture-template";
import { PlotAPI } from "data-forge-plot/build/plot-api";
import "../index";
import { IPlotConfig, HorizontalLabelPosition } from "@data-forge-plot/chart-def";
import { IAxisMap } from "data-forge-plot/build/chart-def";

describe("index", () => {

    it("can render image", async () => {
        const data: any = {};
        const plotConfig: IPlotConfig = { x: { label: { position: HorizontalLabelPosition.OuterRight }}};
        const axisMap: IAxisMap = {};
        const plot = new PlotAPI(data, plotConfig, axisMap);
        const outputPath = "./output/test";
        await plot.renderImage(outputPath);
        expect(captureImage).toHaveBeenCalled();
    });

});
