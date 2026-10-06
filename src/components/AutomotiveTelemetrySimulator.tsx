import React, { useState, useMemo } from 'react';
import { Activity, AlertTriangle, CheckCircle2, Gauge, RefreshCw, Cpu, Database } from 'lucide-react';

export const AutomotiveTelemetrySimulator: React.FC = () => {
  // Configurable vehicle telemetry state
  const [rpm, setRpm] = useState<number>(3200);
  const [coolantTemp, setCoolantTemp] = useState<number>(92);
  const [batteryVoltage, setBatteryVoltage] = useState<number>(12.6);
  const [oilPressure, setOilPressure] = useState<number>(42);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Diagnostic calculation based on automotive threshold models
  const diagnostics = useMemo(() => {
    const issues: string[] = [];
    let riskScore = 15; // baseline

    if (coolantTemp > 105) {
      issues.push('High Thermal Stress: Coolant exceeds 105°C limit');
      riskScore += 40;
    } else if (coolantTemp < 70) {
      issues.push('Cold Engine Loop: Low thermal efficiency detected');
      riskScore += 10;
    }

    if (rpm > 5500) {
      issues.push('Engine Over-rev Risk: Sustained >5500 RPM operation');
      riskScore += 35;
    }

    if (batteryVoltage < 11.8) {
      issues.push('Alternator / Battery Degradation: Low voltage (<11.8V)');
      riskScore += 30;
    } else if (batteryVoltage > 14.5) {
      issues.push('Overcharging Hazard: Voltage surge (>14.5V)');
      riskScore += 25;
    }

    if (oilPressure < 25) {
      issues.push('Critical Oil Pressure Drop (<25 PSI)');
      riskScore += 45;
    }

    const clampedRisk = Math.min(100, riskScore);

    let statusText = 'Optimal System Health';
    let statusLevel: 'normal' | 'warning' | 'critical' = 'normal';

    if (clampedRisk >= 65) {
      statusText = 'Critical Anomaly Detected';
      statusLevel = 'critical';
    } else if (clampedRisk >= 35) {
      statusText = 'Subsystem Warning Flag';
      statusLevel = 'warning';
    }

    // Generate simulated CAN Bus Hex Payload
    const hexRpm = Math.round(rpm * 4).toString(16).padStart(4, '0').toUpperCase();
    const hexTemp = Math.round(coolantTemp + 40).toString(16).padStart(2, '0').toUpperCase();
    const hexVolt = Math.round(batteryVoltage * 10).toString(16).padStart(2, '0').toUpperCase();

    return {
      riskScore: clampedRisk,
      issues,
      statusText,
      statusLevel,
      canPacket: `ID: 0x7E8 | DLC: 8 | DATA: ${hexRpm.slice(0, 2)} ${hexRpm.slice(2, 4)} ${hexTemp} ${hexVolt} 00 2A 1F`,
    };
  }, [rpm, coolantTemp, batteryVoltage, oilPressure]);

  const setPreset = (preset: 'normal' | 'overheat' | 'battery-low') => {
    if (preset === 'normal') {
      setRpm(2800);
      setCoolantTemp(88);
      setBatteryVoltage(12.8);
      setOilPressure(45);
    } else if (preset === 'overheat') {
      setRpm(5800);
      setCoolantTemp(114);
      setBatteryVoltage(12.4);
      setOilPressure(32);
    } else if (preset === 'battery-low') {
      setRpm(1200);
      setCoolantTemp(85);
      setBatteryVoltage(11.2);
      setOilPressure(38);
    }
  };

  const runRandomTelematics = () => {
    setIsSimulating(true);
    const randomizedRpm = Math.floor(1800 + Math.random() * 4200);
    const randomizedTemp = Math.floor(75 + Math.random() * 38);
    const randomizedVolt = +(11.4 + Math.random() * 3.0).toFixed(1);
    const randomizedOil = Math.floor(22 + Math.random() * 35);

    setTimeout(() => {
      setRpm(randomizedRpm);
      setCoolantTemp(randomizedTemp);
      setBatteryVoltage(randomizedVolt);
      setOilPressure(randomizedOil);
      setIsSimulating(false);
    }, 300);
  };

  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-6 text-slate-100 space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Interactive CAN Bus Telematics & Diagnostic Engine
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Demonstrating Python predictive modeling logic developed during YuvaIntern internship
          </p>
        </div>

        {/* Quick Test Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setPreset('normal')}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
          >
            Normal Drive
          </button>
          <button
            onClick={() => setPreset('overheat')}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-900/40 transition-colors"
          >
            Thermal Spike
          </button>
          <button
            onClick={() => setPreset('battery-low')}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 hover:bg-slate-800 text-red-300 border border-red-900/40 transition-colors"
          >
            Battery Drop
          </button>
          <button
            onClick={runRandomTelematics}
            disabled={isSimulating}
            className="p-1.5 text-xs rounded-md bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-800/60 transition-colors"
            title="Randomize telemetry input"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Grid: Telemetry Controls + Real-Time Analytics Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Input Sensor Parameters (OBD-II / CAN Telematics)
          </p>

          {/* RPM Slider */}
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                Engine Speed (RPM)
              </span>
              <span className="font-mono-code font-bold text-cyan-400 tabular-nums">{rpm} RPM</span>
            </div>
            <input
              type="range"
              min="800"
              max="6800"
              step="50"
              value={rpm}
              onChange={(e) => setRpm(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Idle (800)</span>
              <span>Cruising (2800)</span>
              <span>Redline (6800)</span>
            </div>
          </div>

          {/* Coolant Temperature */}
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-medium">Coolant Temp (°C)</span>
              <span
                className={`font-mono-code font-bold tabular-nums ${
                  coolantTemp > 105 ? 'text-red-400' : 'text-cyan-400'
                }`}
              >
                {coolantTemp}°C
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="125"
              step="1"
              value={coolantTemp}
              onChange={(e) => setCoolantTemp(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>50°C</span>
              <span>Standard (85°C - 95°C)</span>
              <span>Critical (125°C)</span>
            </div>
          </div>

          {/* Dual row: Voltage and Oil Pressure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Battery Voltage</span>
                <span
                  className={`font-mono-code font-bold tabular-nums ${
                    batteryVoltage < 11.8 ? 'text-amber-400' : 'text-cyan-400'
                  }`}
                >
                  {batteryVoltage.toFixed(1)} V
                </span>
              </div>
              <input
                type="range"
                min="10.5"
                max="15.0"
                step="0.1"
                value={batteryVoltage}
                onChange={(e) => setBatteryVoltage(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>10.5V</span>
                <span>12.6V Norm</span>
                <span>15.0V</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Oil Pressure</span>
                <span
                  className={`font-mono-code font-bold tabular-nums ${
                    oilPressure < 25 ? 'text-red-400' : 'text-cyan-400'
                  }`}
                >
                  {oilPressure} PSI
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="65"
                step="1"
                value={oilPressure}
                onChange={(e) => setOilPressure(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>15 PSI</span>
                <span>40 PSI Norm</span>
                <span>65 PSI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics & Diagnostic Output Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Status Alert Badge */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              diagnostics.statusLevel === 'critical'
                ? 'bg-red-950/40 border-red-800 text-red-200'
                : diagnostics.statusLevel === 'warning'
                ? 'bg-amber-950/40 border-amber-800 text-amber-200'
                : 'bg-emerald-950/30 border-emerald-800/70 text-emerald-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {diagnostics.statusLevel === 'critical' ? (
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
              ) : diagnostics.statusLevel === 'warning' ? (
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              )}
              <span className="text-sm font-bold tracking-tight">{diagnostics.statusText}</span>
            </div>

            {/* Risk Gauge Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Anomaly Risk Index:</span>
                <span className="font-mono-code font-bold tabular-nums">
                  {diagnostics.riskScore}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    diagnostics.riskScore >= 65
                      ? 'bg-red-500'
                      : diagnostics.riskScore >= 35
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${diagnostics.riskScore}%` }}
                ></div>
              </div>
            </div>

            {/* Issue flags list */}
            {diagnostics.issues.length > 0 ? (
              <div className="mt-3 pt-3 border-t border-slate-800/60 space-y-1 text-xs">
                {diagnostics.issues.map((issue, idx) => (
                  <p key={idx} className="text-slate-300 flex items-start gap-1.5">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{issue}</span>
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-3 pt-3 border-t border-slate-800/60 text-xs text-slate-300">
                All ECU parameters operate within nominal baseline standard tolerances.
              </p>
            )}
          </div>

          {/* CAN Bus Hex Packet Stream (Telematics Hardware Ingestion) */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                CAN 2.0B Frame Ingestion
              </span>
              <span className="text-[10px] font-mono-code text-cyan-400">500 kbps</span>
            </div>
            <div className="p-2 rounded bg-black/60 font-mono-code text-[11px] text-cyan-300 break-all select-all">
              {diagnostics.canPacket}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Database className="w-3 h-3 text-slate-500" />
              <span>Pandas Ingestion Pipeline: 10,000+ frames buffered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
