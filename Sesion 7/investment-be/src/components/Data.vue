<template>
  <div class="InvestmentGetClass">
    ID: <input v-model="investmentIdentifier" id="investmentIdentifier">
    <br>
    <p>Name: <span id="investmentName">{{ investmentName }}</span></p>
    <p>Description: <span id="investmentDescription">{{ investmentDescription }}</span></p>
    <p>Interest: <span id="investmentInterest">{{ investmentInterest }}</span></p>
    <p>Starting Amount: <span id="investmentStartingAmount">{{ investmentStartingAmount }}</span></p>
    <p>Duration Days: <span id="investmentDurationDays">{{ investmentDurationDays }}</span></p>
    <p>Start Date: <span id="investmentStartDate">{{ investmentStartDate }}</span></p>
    <p>Final Amount: <span id="investmentFinalAmount">{{ finalAmount }}</span></p>
    <button id="get-data-button" @click="getInvestmentMethod">Obtener Información</button>
    <br>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'InvestmentDataClass',
  data() {
    return {
      investmentIdentifier: '',
      investmentName: '',
      investmentDescription: '',
      investmentInterest: '',
      investmentStartingAmount: '',
      investmentDurationDays: '',
      investmentStartDate: '',
      finalAmount: '',
      response: '',
    };
  },
  methods: {
    getInvestmentMethod() {
      axios.get(`http://localhost:3000/returnDBValues?id=${this.investmentIdentifier}`).then(response => {
        console.log(response.data);
        this.investmentName = response.data.name;
        this.investmentDescription = response.data.description;
        this.investmentInterest = response.data.interest;
        this.investmentStartingAmount = response.data.starting_amount;
        const date = new Date(response.data.start_date);
        const endDate = new Date(response.data.end_date);
        this.investmentDurationDays = (endDate.getTime() - date.getTime()) / (1000 * 3600 * 24);
        this.investmentStartDate = date.toUTCString();
        this.finalAmount = response.data.final_amount;
      });
    },
  },
};
</script>
