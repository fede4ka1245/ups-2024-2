import {Arg, ID, Mutation, Query, Resolver} from "type-graphql";
import { Purchase, Customer, Gym, Training } from "../types";
import { PurchaseModel, CustomerModel, GymModel, TrainingModel } from "../database";

@Resolver(Purchase)
export class PurchaseResolver {
  @Query(type => [Purchase])
  async getPurchase(@Arg("id") id: string) {
    return await PurchaseModel.findById(id)
  }

  @Query(type => [Purchase])
  async purchases(@Arg("customerId", type => ID) customerId: string) {
    return await PurchaseModel.find({
      customer: customerId
    })
  }

  @Mutation(type => Purchase)
  async createPurchase(@Arg("purchase") purchase: Purchase) {
    await PurchaseModel.create(purchase);
    return purchase;
  }

  @Mutation(type => Purchase)
  async updatePurchase(@Arg("purchase") purchase: Purchase, @Arg("id") id: string) {
    return await PurchaseModel.findByIdAndUpdate(id, purchase);
  }

  @Mutation(type => Purchase)
  async deletePurchase(@Arg("id") id: string) {
    return await PurchaseModel.findByIdAndDelete(id);
  }

  @Mutation(type => Purchase)
  async purchaseTraining(@Arg("trainingId", type => ID) trainingId: string, @Arg("customerId", type => ID) customerId: string) {
    const training = await TrainingModel.findById(trainingId);
    if (!training) {
      throw new Error('Training not found');
    }

    const customer = await CustomerModel.findById(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }

    const purchase = new PurchaseModel({
      training,
      customer,
      price: training.price,
      branchIncome: training.price // This should be calculated based on your business logic
    });

    customer.register.push(purchase.id);
    await customer.save();

    return await purchase.save();
  }
}

@Resolver(Customer)
export class CustomerResolver {
  @Query(type => [Customer])
  async getCustomer(@Arg("id") id: string) {
    return await CustomerModel.findById(id)
  }

  @Query(type => [Customer])
  async customers() {
    return await CustomerModel.find({})
  }

  @Mutation(type => Customer)
  async createCustomer(@Arg("customer") customer: Customer) {
    await CustomerModel.create(customer);
    return customer;
  }

  @Mutation(type => Customer)
  async updateCustomer(@Arg("customer") customer: Customer, @Arg("id") id: string) {
    return await CustomerModel.findByIdAndUpdate(id, customer);
  }

  @Mutation(type => Customer)
  async deleteCustomer(@Arg("id") id: string) {
    return await CustomerModel.findByIdAndDelete(id);
  }
}

@Resolver(Gym)
export class GymResolver {
  @Query(type => [Gym])
  async getGym(@Arg("id") id: string) {
    return await GymModel.findById(id)
  }

  @Query(type => [Gym])
  async gyms() {
    return await GymModel.find({})
  }

  @Mutation(type => Gym)
  async createGym(@Arg("gym") gym: Gym) {
    await GymModel.create(gym);
    return gym;
  }

  @Mutation(type => Gym)
  async updateGym(@Arg("gym") gym: Gym, @Arg("id") id: string) {
    return await GymModel.findByIdAndUpdate(id, gym);
  }

  @Mutation(type => Gym)
  async deleteGym(@Arg("id") id: string) {
    return await GymModel.findByIdAndDelete(id);
  }
}

@Resolver(Training)
export class TrainingResolver {
  @Query(type => [Training])
  async getTraining(@Arg("id") id: string) {
    return await TrainingModel.findById(id)
  }

  @Query(type => [Training])
  async trainings() {
    return await TrainingModel.find({})
  }

  @Mutation(type => Training)
  async createTraining(@Arg("training") training: Training) {
    await TrainingModel.create(training);
    return training;
  }

  @Mutation(type => Training)
  async updateTraining(@Arg("training") training: Training, @Arg("id") id: string) {
    return await TrainingModel.findByIdAndUpdate(id, training);
  }

  @Mutation(type => Training)
  async deleteTraining(@Arg("id") id: string) {
    return await TrainingModel.findByIdAndDelete(id);
  }
}
