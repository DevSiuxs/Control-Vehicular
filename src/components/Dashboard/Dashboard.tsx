'use client';

import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.glassCard}>
        <h2>Dashboard de Reportes</h2>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Vehículos Activos</h3>
            <div className={styles.statValue}>24</div>
          </div>
          
          <div className={styles.statCard}>
            <h3>Servicios del Mes</h3>
            <div className={styles.statValue}>156</div>
          </div>
          
          <div className={styles.statCard}>
            <h3>Mantenimientos Pendientes</h3>
            <div className={styles.statValue}>8</div>
          </div>
          
          <div className={styles.statCard}>
            <h3>Alertas Activas</h3>
            <div className={styles.statValue}>3</div>
          </div>
        </div>
      </div>

      <div className={styles.glassCard}>
        <h3>Vehículos con Mantenimiento Próximo</h3>
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Vehículo</th>
                <th>Operador</th>
                <th>Tipo Mantenimiento</th>
                <th>Fecha Programada</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CAM-001 (Camioneta)</td>
                <td>Juan Pérez</td>
                <td>Cambio de Aceite</td>
                <td>15/10/2025</td>
                <td><span className={styles.statusPending}>Pendiente</span></td>
              </tr>
              <tr>
                <td>AUT-005 (Automóvil)</td>
                <td>María González</td>
                <td>Revisión Frenos</td>
                <td>18/10/2025</td>
                <td><span className={styles.statusPending}>Pendiente</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}