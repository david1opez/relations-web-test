"use client";

import { useState } from "react";
import PageTitle from "@/components/pageTitle/PageTitle";
import styles from "./perfil.module.css";

export default function PerfilPage() {
  const [subpages, setSubpages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"Overview"|"Settings"|"Security">("Overview");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="pageContainer">
      <PageTitle
        icon="user"
        title="Perfil"
        subpages={subpages}
        onPageChange={setSubpages}
      />

      <div className={styles.container}>
        {/* Header de usuario */}
        <div className={styles.userHeader}>
          <img src="/images/profile.jpg" alt="Avatar" className={styles.avatar}/>
          <div className={styles.userInfo}>
            <h2>John Smith</h2>
            <p>john.smith@company.com</p>
            <div className={styles.tags}>
              <span>Ventas</span>
              <span>Gerente</span>
            </div>
            <small>Último ingreso: 24/2/2024 09:15 AM</small>
          </div>
        </div>

        {/* Pestañas */}
        <div className={styles.tabs}>
          {[
            { label: "Resumen", key: "Overview" },
            { label: "Configuración", key: "Settings" },
          ].map(t => (
            <span
              key={t.key}
              className={activeTab===t.key ? styles.activeTab : ""}
              onClick={()=>setActiveTab(t.key as any)}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* Contenido de cada pestaña */}
        {activeTab==="Overview" && (
          <>
            <div className={styles.metrics}>
              <div className={styles.card}>
                <p>Llamadas (7d)</p><h3>156</h3><small>⬈ 8%</small>
              </div>
              <div className={styles.card}>
                <p>Sentimiento</p><h3>8.9</h3><small>⬈ 2.1%</small>
              </div>
              <div className={styles.card}>
                <p>Duración</p><h3>42:15</h3><small>⬊ 3%</small>
              </div>
            </div>
            <div className={styles.activity}>
              <h4>Actividad reciente</h4>
              <ul>
                <li>
                  <strong>Llamada</strong>
                  <p>Revisión de proyecto</p>
                  <span>45m • hace 2h</span>
                </li>
                <li>
                  <strong>Capacitación</strong>
                  <p>Técnicas de ventas</p>
                  <span>2h • hace 1d</span>
                </li>
                <li>
                  <strong>Llamada</strong>
                  <p>Sync equipo</p>
                  <span>30m • hace 2d</span>
                </li>
              </ul>
            </div>
          </>
        )}

        {activeTab==="Settings" && (
          <div className={styles.settings}>
            <h4>Configuración</h4>
            <div className={styles.inputGroup}>
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                value={fullName}
                onChange={e=>setFullName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Tu correo"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className={styles.toggleGroup}>
              <div><strong>Notificaciones</strong><span></span></div>
              <div
                className={`${styles.toggle} ${notifications?styles.active:""}`}
                onClick={()=>setNotifications(!notifications)}
              />
            </div>
    
          </div>
        )}

        {activeTab==="Security" && (
          <div className={styles.settings}>
            <h4>Seguridad</h4>
            <div className={styles.inputGroup}>
              <label>Contraseña actual</label>
              <input type="password" placeholder="Actual"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Nueva contraseña</label>
              <input type="password" placeholder="Nueva"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Confirmar contraseña</label>
              <input type="password" placeholder="Confirma"/>
            </div>
            <div className={styles.toggleGroup}>
              <div><strong>2FA</strong><span>Autenticación doble</span></div>
              <div className={styles.toggle}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}