import current from "../img/temp.svg";
import device from "../img/device.svg";
import modes from "../img/mode.svg";

export default function DeviceStack() {
  return (
    <div className="device-section">
      <div className="device-section-group">
        <object type="image/svg+xml" data={current}>
          Your browser does not support SVG
        </object>
        <p>Current</p>
        <h1>21</h1>
      </div>
      <div className="line-up"></div>
      <div className="device-section-group">
        <object type="image/svg+xml" data={device}>
          Your browser does not support SVG
        </object>
        <p>Device</p>
        <h1>mQ135</h1>
      </div>
      <div className="line-up"></div>
      <div className="device-section-group">
        <object type="image/svg+xml" data={modes}>
          Your browser does not support SVG
        </object>
        <p>Mode</p>
        <h1>Quiet</h1>
      </div>
    </div>
  );
}
