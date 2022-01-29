const boilerplateTrigger = {
  start: "bottom bottom",
  toggleActions: "play none none none",
  onLeaveBack: (self) => self.disable(),
};

export const scrollTriggerSelect = {
  ...boilerplateTrigger,
  trigger: ".header",
};

export const scrollTriggerDeliver = {
  ...boilerplateTrigger,
  trigger: ".header-deliver",
};

export const scrollTriggerTrade = {
  ...boilerplateTrigger,
  trigger: ".text-trade",
};

export const scrollTriggerBox = {
  trigger: ".box-container",
  start: "top 85%",
  toggleActions: "play none none none",
  onLeaveBack: (self) => self.disable(),
};

export const scrollTriggerCustomer = {
  ...boilerplateTrigger,
  trigger: ".header-customer",
};
