import React, { useState } from 'react';
import { StorageService } from '../../lib/storage';
import { SUPABASE_SQL_SCHEMA, getSupabaseClient } from '../../lib/supabase';
import { Database, CheckCircle2, Copy, RefreshCw, Key, Link } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const [config, setConfig] = useState(() => StorageService.getSupabaseConfig());
  const [copied, setCopied] = useState(false);
  const [testing, setTesting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.saveSupabaseConfig(config);
    setStatusMsg('Supabase API configuration updated successfully.');
    setTimeout(() => setStatusMsg(''), 3000);
  };

  const handleTestConnection = async () => {
    setTesting(true);
    setStatusMsg('');
    try {
      const client = getSupabaseClient();
      if (!client) {
        setStatusMsg('Error: Please enter both Supabase URL and Anon Key.');
      } else {
        const { error } = await client.from('batches').select('count', { count: 'exact', head: true });
        if (error && error.code !== 'PGRST116') {
          setStatusMsg(`Supabase connected! Note: ${error.message}`);
        } else {
          setStatusMsg('✓ Supabase connection successful & verified!');
          StorageService.saveSupabaseConfig({ ...config, isConnected: true });
        }
      }
    } catch (e: any) {
      setStatusMsg(`Connection test error: ${e?.message || e}`);
    } finally {
      setTesting(false);
    }
  };

  const handleCopySQL = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Supabase Database Integration</h2>
        <p className="text-sm text-slate-500">Configure your Supabase cloud database credentials and run schema migrations.</p>
      </div>

      {statusMsg && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-xs rounded-2xl animate-in fade-in">
          {statusMsg}
        </div>
      )}

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Supabase Credentials Form */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
            <Database className="w-5 h-5 text-indigo-600" /> Supabase Connection Keys
          </h3>

          <form onSubmit={handleSaveConfig} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Supabase Project URL
              </label>
              <div className="relative">
                <Link className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="https://xyz.supabase.co"
                  value={config.url}
                  onChange={e => setConfig({ ...config, url: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Supabase Anon / Public Key
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR..."
                  value={config.anonKey}
                  onChange={e => setConfig({ ...config, anonKey: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none font-mono"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Save Configuration
              </button>

              <button
                type="button"
                onClick={handleTestConnection}
                disabled={testing}
                className="px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
                Test Connection
              </button>
            </div>
          </form>
        </div>

        {/* Supabase SQL Schema Generator */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">1-Click SQL Schema Migration</h3>
            <button
              onClick={handleCopySQL}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? 'Copied to Clipboard!' : 'Copy SQL Schema'}
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Copy this SQL code and execute it in your Supabase project SQL Editor to automatically create the required database tables.
          </p>

          <pre className="bg-slate-900 text-amber-300 p-4 rounded-xl text-[11px] font-mono h-64 overflow-y-auto border border-slate-800 leading-relaxed select-all">
            {SUPABASE_SQL_SCHEMA}
          </pre>
        </div>
      </div>
    </div>
  );
};
