import Form from "@/components/main/shared/form/Form";
import ReusableInputField from "@/components/main/shared/form/ReusableInputField";
import ReusableSelect from "@/components/main/shared/form/ReusableSelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCreditCard, FaPaypal, FaLock } from "react-icons/fa";
import bg from "../../../assets/faqbg.png";

const Membership = () => {
  const form = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    // Make API call or other logic
  };

  const [promoCode, setPromoCode] = useState("");
  const [subtotal, setSubtotal] = useState(34.0);
  const [total, setTotal] = useState(34.0);

  const applyPromoCode = () => {
    // Example logic: apply a £5 discount for promo code "SAVE5"
    if (promoCode.trim().toUpperCase() === "SAVE5") {
      setTotal(subtotal - 5);
    } else {
      setTotal(subtotal);
    }
  };

  //   const options = [
  //     { label: "Remind me before 5 Minutes", value: "5" },
  //     { label: "Remind me before 10 Minutes", value: "10" },
  //     { label: "Remind me before 15 Minutes", value: "15" },
  //   ];
  return (
    <div className="md:py-20">
      <div className="container mx-auto py-10 p-5 md:p-3 md:border rounded-lg backdrop-blur-md md:shadow-2xl">
        <div className="md:p-5">
          <h3 className="text-center font-open-sans text-[28px] font-medium leading-normal max-w-2xl mx-auto">
            Create Account
          </h3>
          <h1 className="text-center font-roboto text-xl pb-5  md:text-[48px] font-bold leading-normal">
            Exercise Professional Membership
          </h1>
        </div>
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <div className="md:p-5">
            <div className="flex justify-center gap-5">
              <div className="mb-4 flex-1">
                <ReusableInputField
                  name="fname"
                  label="First Name *"
                  placeholder="Enter your first name"
                  inputClassName="bg-white border"
                  control={form.control}
                  validation={true}
                />
              </div>
              <div className="mb-4 flex-1">
                <ReusableInputField
                  name="lname"
                  label="Last Name *"
                  placeholder="Enter your last name"
                  inputClassName="bg-white border"
                  control={form.control}
                  validation={true}
                />
              </div>
            </div>
            <div>
              <ReusableInputField
                name="phone"
                label="Phone *"
                placeholder="Enter your Phone Number"
                inputClassName="bg-white border"
                control={form.control}
                validation={true}
              />
            </div>
            <div className="py-5">
              <ReusableInputField
                name="email"
                label="Email*"
                placeholder="Enter your Email"
                inputClassName="bg-white border"
                control={form.control}
                validation={true}
              />
            </div>
            <div className="flex justify-center gap-5 py-5">
              <div className="flex-1">
                <ReusableInputField
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  inputClassName="bg-white"
                  control={form.control}
                  validation={true}
                />
              </div>
              <div className="flex-1">
                <ReusableInputField
                  name="Confirm password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  inputClassName="bg-white"
                  control={form.control}
                  validation={true}
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Select a Payment Option
              </h2>

              <RadioGroup defaultValue="annual">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="annual" id="annual" />
                  <label htmlFor="annual" className="font-medium text-sm">
                    Annually: £34.00 per Year
                  </label>
                </div>
              </RadioGroup>

              <div className="flex flex-col md:flex-row gap-4 mt-6">
                {/* Promo code card */}
                <Card className="w-full md:w-1/2">
                  <CardHeader className="text-base lg:text-lg font-medium text-neutral-900">
                    Have a Promo Code?
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Input
                      placeholder="Enter code here"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button onClick={applyPromoCode}>Apply</Button>
                  </CardContent>
                </Card>

                {/* Order summary card */}
                <Card className="w-full md:w-1/2">
                  <CardHeader className="text-base lg:text-lg font-medium text-neutral-900">
                    Order Summary
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Subtotal</span>
                      <span>£{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base">
                      <span>Total</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="py-5">
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Enter Billing Information
              </h2>

              <ReusableInputField
                name="cardname"
                label="Name on Card *"
                placeholder="Enter your Name on Card"
                inputClassName="bg-white border"
                control={form.control}
                validation={true}
              />
              <ReusableInputField
                name="companyname"
                label="Company Name *"
                placeholder="Enter your Company Name"
                inputClassName="bg-white border"
                control={form.control}
                validation={true}
                className="py-5"
              />
              <ReusableInputField
                name="strtaddress"
                label="Street Address *"
                placeholder="Enter your Street Address"
                inputClassName="bg-white border"
                control={form.control}
                validation={true}
              />

              <div className="flex gap-5 py-5">
                <div className="flex-1">
                  {/* <ReusableSelect
                    name="remind"
                    control={form.control}
                    placeholder="Remind me before 5 Minutes"
                    options={options}
                    label="Set Reminder"
                  /> */}
                  <FormLabel className="py-3 text-base lg:text-lg font-medium text-neutral-900 ">
                    Country
                  </FormLabel>
                  <Select>
                    <SelectTrigger className="w-full ">
                      <SelectValue placeholder="country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">A</SelectItem>
                      <SelectItem value="dark">B</SelectItem>
                      <SelectItem value="system">C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  {/* <ReusableSelect
                    name="remind"
                    control={form.control}
                    placeholder="Remind me before 5 Minutes"
                    // options={options}
                    label="Set Reminder"
                  /> */}
                  <FormLabel className="py-3 text-base lg:text-lg font-medium text-neutral-900 ">
                    State
                  </FormLabel>
                  <Select>
                    <SelectTrigger className="w-full ">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">A</SelectItem>
                      <SelectItem value="dark">B</SelectItem>
                      <SelectItem value="system">C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center gap-5 ">
                <div className="mb-4 flex-1">
                  <ReusableInputField
                    name="city"
                    label="City *"
                    placeholder="Enter your city"
                    inputClassName="bg-white border"
                    control={form.control}
                    validation={true}
                  />
                </div>
                <div className="mb-4 flex-1">
                  <ReusableInputField
                    name="pcode"
                    label="Post Code *"
                    placeholder="Enter your post code"
                    inputClassName="bg-white border"
                    control={form.control}
                    validation={true}
                  />
                </div>
              </div>

              <Card className="w-full max-w-full mx-auto">
                <CardHeader className="text-sm font-semibold">
                  Enter Your Card Details
                </CardHeader>
                <CardContent>
                  <label className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer mb-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="appearance-none w-4 h-4 border-2 border-[#5AA20E] rounded-full checked:bg-[#5AA20E] checked:border-[#5AA20E]"
                    />
                    <FaCreditCard className="text-lg" /> Credit/Debit Card
                  </label>

                  <Input
                    type="text"
                    placeholder="Card Number"
                    className="bg-white border mb-3"
                  />

                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="MM/YY"
                      className="bg-white border"
                    />
                    <Input
                      type="text"
                      placeholder="CVC"
                      className="bg-white border"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="flex items-center gap-3 pt-5">
                <Checkbox id="terms" />
                <Label htmlFor="terms">
                  * By creating an account, you agree to our terms & conditions
                </Label>
              </div>
              <div className="flex items-center gap-3 py-5">
                <Checkbox id="terms" />
                <Label htmlFor="terms">
                  * I understand that personal information I enter on this
                  website will be stored and used to contact me in the future. I
                  can change or remove this information at any time.
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">
                  * I understand that if I make any purchases on this website,
                  billing information will be securely stored with a 3rd party
                  payment processor. I can change or remove this information at
                  any time.
                </Label>
              </div>
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                className="rounded-lg bg-primary lg:px-16 py-3 text-xl text-white font-medium h-auto w-full font-nunito"
              >
                {form.formState.isSubmitting
                  ? "Loading..."
                  : "Submit Registration"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Membership;
