/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";

import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  MaxLength,
  IsInt,
  Max,
  IsDate,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { ApiKeyCreateNestedManyWithoutUsersInput } from "./ApiKeyCreateNestedManyWithoutUsersInput";
import { AvailabilityCreateNestedManyWithoutUsersInput } from "./AvailabilityCreateNestedManyWithoutUsersInput";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { CredentialCreateNestedManyWithoutUsersInput } from "./CredentialCreateNestedManyWithoutUsersInput";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { EventTypeCreateNestedManyWithoutUsersInput } from "./EventTypeCreateNestedManyWithoutUsersInput";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { EnumUserIdentityProvider } from "./EnumUserIdentityProvider";
import { ImpersonationCreateNestedManyWithoutUsersInput } from "./ImpersonationCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserPlan } from "./EnumUserPlan";
import { EnumUserRole } from "./EnumUserRole";
import { ScheduleCreateNestedManyWithoutUsersInput } from "./ScheduleCreateNestedManyWithoutUsersInput";
import { SelectedCalendarCreateNestedManyWithoutUsersInput } from "./SelectedCalendarCreateNestedManyWithoutUsersInput";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";
import { MembershipCreateNestedManyWithoutUsersInput } from "./MembershipCreateNestedManyWithoutUsersInput";
import { WebhookCreateNestedManyWithoutUsersInput } from "./WebhookCreateNestedManyWithoutUsersInput";
import { WorkflowCreateNestedManyWithoutUsersInput } from "./WorkflowCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  allowDynamicBooking?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ApiKeyCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ApiKeyCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ApiKeyCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  apiKeys?: ApiKeyCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AvailabilityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AvailabilityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  availability?: AvailabilityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatar?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  away!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  brandColor!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  bufferTime!: number;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  completedOnboarding!: boolean;

  @ApiProperty({
    required: false,
    type: () => CredentialCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CredentialCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CredentialCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  credentials?: CredentialCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  darkBrandColor!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  defaultScheduleId?: number | null;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DestinationCalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => DestinationCalendarWhereUniqueInput, {
    nullable: true,
  })
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  disableImpersonation!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  emailVerified?: Date | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  endTime!: number;

  @ApiProperty({
    required: false,
    type: () => EventTypeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventTypeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventTypeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  eventTypes?: EventTypeCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  feedback?: FeedbackCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hideBranding!: boolean;

  @ApiProperty({
    required: true,
    enum: EnumUserIdentityProvider,
  })
  @IsEnum(EnumUserIdentityProvider)
  @Field(() => EnumUserIdentityProvider)
  identityProvider!: "CAL" | "GOOGLE" | "SAML";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identityProviderId?: string | null;

  @ApiProperty({
    required: false,
    type: () => ImpersonationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ImpersonationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ImpersonationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  impersonatedBy?: ImpersonationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ImpersonationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ImpersonationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ImpersonationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  impersonatedUsers?: ImpersonationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  invitedTo?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  locale?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  metadata?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumUserPlan,
  })
  @IsEnum(EnumUserPlan)
  @Field(() => EnumUserPlan)
  plan!: "FREE" | "TRIAL" | "PRO";

  @ApiProperty({
    required: true,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @Field(() => EnumUserRole)
  role!: "USER" | "ADMIN";

  @ApiProperty({
    required: false,
    type: () => ScheduleCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ScheduleCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ScheduleCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  schedules?: ScheduleCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SelectedCalendarCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SelectedCalendarCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SelectedCalendarCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  selectedCalendars?: SelectedCalendarCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SessionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  startTime!: number;

  @ApiProperty({
    required: false,
    type: () => MembershipCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MembershipCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MembershipCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  teams?: MembershipCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  theme?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeFormat?: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  timeZone!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  trialEndsAt?: Date | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  twoFactorEnabled!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  twoFactorSecret?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  verified?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => WebhookCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WebhookCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WebhookCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  webhooks?: WebhookCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  weekStart!: string;

  @ApiProperty({
    required: false,
    type: () => WorkflowCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WorkflowCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WorkflowCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  workflows?: WorkflowCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
