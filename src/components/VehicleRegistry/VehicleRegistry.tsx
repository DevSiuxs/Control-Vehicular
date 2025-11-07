'use client';

import { useState } from 'react';
import styles from './VehicleRegistry.module.css';

export default function VehicleRegistry() {
  const [formData, setFormData] = useState({
    plate: '',
    type: '',
    brand: '',
    model: '',
    year: '',
    color: '',
    assigned: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vehículo registrado correctamente');
    setFormData({ plate: '', type: '', brand: '', model: '', year: '', color: '', assigned: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.vehicleRegistry}>
      <div className={styles.glassCard}>
        <h2>Registro de Vehículos</h2>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Placa</label>
              <input
                type="text"
                name="plate"
                value={formData.plate}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Tipo de Vehículo</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Seleccionar</option>
                <option value="auto">Automóvil</option>
                <option value="camioneta">Camioneta</option>
                <option value="motocicleta">Motocicleta</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Marca</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Modelo</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Año</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Operador Asignado</label>
            <select
              name="assigned"
              value={formData.assigned}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Sin asignar</option>
              <option value="1">Juan Pérez</option>
              <option value="2">María González</option>
              <option value="3">Carlos López</option>
            </select>
          </div>
          
          <button type="submit" className={styles.button}>
            Registrar Vehículo
          </button>
        </form>
      </div>
    </div>
  );
}