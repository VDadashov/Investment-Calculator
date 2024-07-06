import React from 'react'

const UserInput = ({userInput, onChange}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            required
            value={userInput.duration}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput
