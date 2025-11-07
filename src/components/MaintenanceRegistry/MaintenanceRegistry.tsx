'use client';

import { useState } from 'react';
import styles from './MaintenanceRegistry.module.css';

export default function MaintenanceRegistry() {
  const [formData, setFormData] = useState({
    vehicle: '',
    type: '',
    date: '',
    cost: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mantenimiento registrado correctamente');
    setFormData({ vehicle: '', type: '', date: '', cost: '', description: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.maintenanceRegistry}>
      <div className={styles.glassCard}>
        <h2>Registro de Mantenimiento</h2>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Vehículo</label>
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Seleccionar</option>
                <option value="CAM-001">CAM-001 (Toyota Hilux)</option>
                <option value="AUT-005">AUT-005 (Nissan Versa)</option>
                <option value="MOT-003">MOT-003 (Honda CB190)</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Tipo de Mantenimiento</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Seleccionar</option>
                <option value="preventivo">Preventivo</option>
                <option value="correctivo">Correctivo</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Fecha</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Costo</label>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className={styles.input}
                step="0.01"
                placeholder="0.00"
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.textarea}
              rows={3}
              placeholder="Descripción del mantenimiento..."
            />
          </div>
          
          <button type="submit" className={styles.button}>
            Registrar Mantenimiento
          </button>
        </form>
      </div>
    </div>
  );
}