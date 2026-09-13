'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addTask(formData: FormData) {
  const supabase = await createClient()
  const title = formData.get('title') as string

  // Obtenemos el usuario autenticado actual desde el servidor
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Debes estar autenticado para crear tareas')
  }

  // Insertamos la tarea. RLS verificará que auth.uid() === user.id
  const { error } = await supabase
    .from('tasks')
    .insert([{ title, user_id: user.id }])

  if (error) {
    console.error('Error insertando tarea:', error.message)
    throw new Error(error.message)
  }

  revalidatePath('/')
}

export async function getTasks() {
  const supabase = await createClient()

  // Gracias a RLS, esta consulta SELECT solo devolverá las tareas del usuario actual
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error obteniendo tareas:', error.message)
    return []
  }

  return data
}