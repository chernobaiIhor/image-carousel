import { Button } from '../../../button';

export const Overlay = () => (
  <div className="full-fixed-width-500 mb-xl">
      <h2 className="mb-xxl">
          <span className="block-span">More From</span>
          <span className="block-span">rico the dog</span>
      </h2>
      <Button variant="badge" color="light">Rico is back</Button>
      <h1 className="mb-sm">Ricobot</h1>
      <p className="mb-lg">Charge into a brand-new supersized adventure with RICO across 50 exciting and
          diverse worlds, available now
          on PS5!</p>
      <div className="mb-xxl">
          <Button size="lg" bg="white" color="dark">Learn More</Button>
      </div>
  </div>
)