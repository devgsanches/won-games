'use client'

import { useForm } from 'react-hook-form'

import { Button } from '@/app/(app)/_components/Button'
import { Field, FieldGroup, FieldSet } from '@/components/ui/field'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Heading } from '../Heading'
import { TextField } from '../TextField'

import { CircleUserRound, LockKeyhole, Mail } from 'lucide-react'
import Link from 'next/link'

type SignUpFormData = {
  email: string
  password: string
  confirmPassword: string
  text: string
}

export function FormSignUp() {
  const form = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      text: ''
    }
  })

  function onSubmit(data: SignUpFormData) {
    console.log(data)
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-black"
          noValidate
        >
          <FieldGroup>
            <FieldSet>
              <Heading
                text="Sign up"
                color="black"
                decorate={{ color: 'secondary', orientation: 'vertical' }}
                size="xxlarge"
              />

              <FieldGroup className="gap-3">
                {/* NOME COMPLETO */}
                <Field>
                  <FormField
                    control={form.control}
                    name="text"
                    rules={{
                      required: 'Full name is required.',
                      pattern: {
                        value: /^[a-zA-Z]+ [a-zA-Z]+$/i,
                        message: 'Full name is invalid.'
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            placeholder="Full name"
                            type="text"
                            icon={<CircleUserRound />}
                            direction="left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-error text-xs font-medium" />
                      </FormItem>
                    )}
                  />
                </Field>
                {/* EMAIL */}
                <Field>
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: 'Email is required.',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email is invalid.'
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            placeholder="Email"
                            type="email"
                            icon={<Mail />}
                            direction="left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-error text-xs font-medium" />
                      </FormItem>
                    )}
                  />
                </Field>

                {/* SENHA */}
                <Field>
                  <FormField
                    control={form.control}
                    name="password"
                    rules={{
                      required: 'Password is required.',
                      minLength: {
                        value: 6,
                        message: 'Minimum of 6 characters.'
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            placeholder="Password"
                            type="password"
                            icon={<LockKeyhole />}
                            direction="left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-error text-xs font-medium" />
                      </FormItem>
                    )}
                  />
                </Field>

                {/* CONFIRMAR SENHA */}
                <Field>
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    rules={{
                      required: 'Confirm password is required.',
                      validate: (value) => {
                        if (value !== form.getValues('password')) {
                          return 'The passwords do not match.'
                        }
                        return true
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            placeholder="Confirm password"
                            type="password"
                            icon={<LockKeyhole />}
                            direction="left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-error text-xs font-medium" />
                      </FormItem>
                    )}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            {/* ACTIONS */}
            <Field orientation="vertical" className="space-y-3 gap-0 mt-10">
              <Button
                type="submit"
                variant="default"
                fullWidth
                className="uppercase font-sm font-medium"
                size="lg"
              >
                create account
              </Button>

              <p className="font-normal text-center text-xs first-letter:uppercase">
                Already have an account?{' '}
                <Link
                  href="/auth/sign-in"
                  className="text-green-dark underline underline-offset-4 first-letter:uppercase inline-block"
                >
                  sign in
                </Link>
              </p>
            </Field>
          </FieldGroup>
        </form>
      </Form>
    </div>
  )
}
