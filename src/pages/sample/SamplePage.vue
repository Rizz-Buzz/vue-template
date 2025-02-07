<template>
  <div class="sample-page">
    <div class="header">
      <h1>Sample Page</h1>
      <p class="subtitle">This is a template for creating new pages</p>
    </div>

    <div class="content-grid">
      <!-- Sample Card -->
      <div class="sample-card">
        <h2>Card Example</h2>
        <p>This shows how to structure a card with the RizzBuzz theme</p>
        <base-button variant="primary">Action Button</base-button>
      </div>

      <!-- Sample Form -->
      <div class="sample-card">
        <h2>Form Example</h2>
        <div class="form-group">
          <label>Sample Input</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div class="form-group">
          <label>Sample Select</label>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>

      <!-- Sample Table -->
      <div class="sample-card full-width">
        <h2>Table Example</h2>
        <table class="sample-table">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style scoped>
  .sample-page {
    padding: 2rem;
    min-height: 100vh;
    background: linear-gradient(135deg, #9c6b9c 0%, #e9967a 100%);
    color: white;
  }

  .header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: white;
  }

  .subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .sample-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .full-width {
    grid-column: 1 / -1;
  }

  .sample-card h2 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    color: white;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .sample-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .sample-table th,
  .sample-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sample-table th {
    background: rgba(255, 255, 255, 0.1);
    font-weight: 600;
  }

  .sample-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    .sample-page {
      padding: 1rem;
    }

    .content-grid {
      grid-template-columns: 1fr;
    }

    .header h1 {
      font-size: 2rem;
    }
  }
</style>
