'use client';

import styles from './VehicleStatus.module.css';

export default function VehicleStatus() {
  const vehicles = [
    {
      plate: 'CAM-001',
      type: 'Camioneta',
      brandModel: 'Toyota Hilux 2023',
      operator: 'Juan Pérez',
      status: 'active',
      lastMaintenance: '15/08/2025'
    },
    {
      plate: 'AUT-005',
      type: 'Automóvil',
      brandModel: 'Nissan Versa 2022',
      operator: 'María González',
      status: 'active',
      lastMaintenance: '20/09/2025'
    },
    {
      plate: 'MOT-003',
      type: 'Motocicleta',
      brandModel: 'Honda CB190 2021',
      operator: 'Carlos López',
      status: 'maintenance',
      lastMaintenance: '05/10/2025'
    },
    {
      plate: 'CAM-002',
      type: 'Camioneta',
      brandModel: 'Ford Ranger 2023',
      operator: 'Ana Martínez',
      status: 'inactive',
      lastMaintenance: '12/09/2025'
    }
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active': return styles.statusActive;
      case 'maintenance': return styles.statusMaintenance;
      case 'inactive': return styles.statusInactive;
      default: return styles.statusActive;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'maintenance': return 'Mantenimiento';
      case 'inactive': return 'Inactivo';
      default: return 'Activo';
    }
  };

  return (
    <div className={styles.vehicleStatus}>
      <div className={styles.glassCard}>
        <h2>Estado de Vehículos</h2>
        
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Tipo</th>
                <th>Marca/Modelo</th>
                <th>Operador</th>
                <th>Último Mantenimiento</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.plate}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.brandModel}</td>
                  <td>{vehicle.operator}</td>
                  <td>{vehicle.lastMaintenance}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${getStatusClass(vehicle.status)}`}>
                      {getStatusText(vehicle.status)}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.editButton}>Editar</button>
                      <button className={styles.deleteButton}>Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}